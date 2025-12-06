import { Router } from "express";
import { listReviews, createReview, deleteReview } from "../controllers/reviewController";
import { reviewValidation } from "../validations/reviewValidation";
import { validate } from "../middleware/validationMiddleware";
import { requireAuth } from "@clerk/express";

const router = Router();
router.get("/", requireAuth(), listReviews);
router.post("/", requireAuth(), reviewValidation, validate, createReview);
router.delete("/:id", requireAuth(), deleteReview);

export default router;  
