import { Request, Response } from "express";
import { reviewService } from "../services/reviewService";


export const listReviews = async (_req: Request, res: Response) => {
  try {
    const reviews = await reviewService.getReviews();
    res.json(reviews);
  } catch {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
};

export const createReview = async (req: Request, res: Response) => {
  try {
    const newReview = await reviewService.addReview(req.body.text);
    res.status(201).json(newReview);
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Failed to add review" });
  }
};


export const deleteReview = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await reviewService.deleteReview(id);
    res.json({ message: "Review deleted successfully" });
  } catch {
    res.status(400).json({ error: "Failed to delete review" });
  }
};
