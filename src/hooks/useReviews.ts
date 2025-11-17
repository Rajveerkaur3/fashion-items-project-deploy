import { useState, useEffect } from "react";
import { reviewRepository, type Review } from "../repositories/reviewRepository";

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  
  useEffect(() => {
    reviewRepository.getAll().then(setReviews);
  }, []);

  const addReview = async (text: string) => {
    const newReview = await reviewRepository.add(text);
    setReviews([newReview, ...reviews]);
  };

  const deleteReview = async (id: number) => {
    await reviewRepository.remove(id);
    setReviews(reviews.filter(r => r.id !== id));
  };

  return { reviews, addReview, deleteReview };
}
