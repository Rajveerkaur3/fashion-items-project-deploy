import { useState, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

export type Review = {
  id: number;
  text: string;
};

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const { getToken, isSignedIn } = useAuth();

  const fetchReviews = async () => {
    if (!isSignedIn) return; 

    try {
      const token = await getToken();
      const res = await fetch("http://localhost:4000/api/reviews", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data: Review[] = await res.json();
      setReviews(data);
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [isSignedIn]);

  const addReview = async (text: string) => {
    if (!isSignedIn) return;

    try {
      const token = await getToken();
      const res = await fetch("http://localhost:4000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });
      const newReview: Review = await res.json();
      setReviews((prev) => [newReview, ...prev]);
    } catch (err) {
      console.error("Failed to add review:", err);
    }
  };

  const deleteReview = async (id: number) => {
    if (!isSignedIn) return;

    try {
      const token = await getToken();
      await fetch(`http://localhost:4000/api/reviews/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReviews((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.error("Failed to delete review:", err);
    }
  };

  return { reviews, addReview, deleteReview };
}
