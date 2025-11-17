import { Router } from "express";
import { listReviews, createReview, deleteReview } from "../controllers/reviewController";
import { reviewValidation } from "../validations/reviewValidation";
import { validate } from "../middleware/validationMiddleware";

const router = Router();

router.get("/", listReviews);
router.post("/", reviewValidation, validate, createReview);
router.delete("/:id", deleteReview);

export default router;
