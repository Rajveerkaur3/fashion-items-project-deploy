// src/services/reviewService.ts
import { reviewRepository, type Review } from "../repository/reviewRepository";

export const reviewService = {
  async getReviews(): Promise<Review[]> {
    return await reviewRepository.getAll();
  },

  async addReview(text: string): Promise<Review> {
    if (!text.trim()) throw new Error("Review text cannot be empty");
    return await reviewRepository.add(text);
  },

  async deleteReview(id: number) {
    return await reviewRepository.remove(id);
  },
};
