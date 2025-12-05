import { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import { reviewService } from "../services/reviewService";

export const listReviews = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) return res.status(401).json({ error: "Please log in first" });

    const reviews = await reviewService.getReviews(userId);
    res.json(reviews);
  } catch {
    res.status(500).json({ error: "Could not load reviews" });
  }
};


export const createReview = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) return res.status(401).json({ error: "Please log in first" });

    const text = req.body.text;
    const newReview = await reviewService.addReview(text, userId);

    res.status(201).json(newReview);
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Could not add review" });
  }
}
export const deleteReview = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) return res.status(401).json({ error: "Please log in first" });

    const id = Number(req.params.id);

    await reviewService.deleteReview(id, userId);

    res.json({ message: "Review removed" });
  } catch {
    res.status(400).json({ error: "Could not delete review" });
  }
};
