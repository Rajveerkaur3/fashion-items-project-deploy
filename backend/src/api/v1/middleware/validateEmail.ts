import { Request, Response, NextFunction } from "express";

export function validateEmail(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;
  if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }
  next();
}
