import { Request, Response, NextFunction } from "express";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

// Wrap Clerk middleware to satisfy Express types
export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clerkAuthMiddleware = ClerkExpressRequireAuth();
  return clerkAuthMiddleware(req as any, res as any, next);
};
