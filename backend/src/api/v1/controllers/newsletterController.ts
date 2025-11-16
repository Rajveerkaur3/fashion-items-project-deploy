import { Request, Response } from "express";
import NewsletterService from "../services/newsletter.Service";

export function getAll(_req: Request, res: Response) {
  const list = NewsletterService.getAll();
  res.json(list);
}

export function create(req: Request, res: Response) {
  const { email } = req.body;
  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "Invalid email" });
  }

  try {
    const created = NewsletterService.create(email);
    if (!created) return res.status(409).json({ message: "Already subscribed" });
    return res.status(201).json(created);
  } catch (err: any) {
    return res.status(500).json({ message: err.message ?? "Server error" });
  }
}
