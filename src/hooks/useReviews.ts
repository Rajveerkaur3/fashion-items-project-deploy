import { useState, useEffect } from "react";
import { reviewService } from "../services/reviewService";
import type { Review } from "../repositories/reviewRepository";

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  
  useEffect(() => {
    reviewService.getReviews().then(setReviews);
  }, []);


  const addReview = async (text: string) => {
    const newReview = await reviewService.addReview(text);
    setReviews([newReview, ...reviews]);
  };


  const deleteReview = async (id: number) => {
    await reviewService.deleteReview(id);
    setReviews(reviews.filter((r) => r.id !== id));
  };

 
  return { reviews, addReview, deleteReview };
}
