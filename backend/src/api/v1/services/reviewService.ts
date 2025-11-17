import { ReviewRepository } from "../repositories/reviewRepository";

const reviewRepository = new ReviewRepository();

export const reviewService = {
  async getReviews() {
    return reviewRepository.getAll();
  },

  async addReview(text: string) {
    if (!text.trim()) {
      throw new Error("Review cannot be empty");
    }
    return reviewRepository.add(text);
  },

  async deleteReview(id: number) {
    return reviewRepository.remove(id);
  },
};
