import { Router } from "express";
import { body } from "express-validator";
import { getAll, create } from "../controllers/newsletterController";
import { validateRequest } from "../middleware/validateRequest";

const router = Router();

// GET all subscribers
router.get("/", getAll);

// POST a new subscriber with express-validator
router.post(
  "/",
  body("email").isEmail().withMessage("Must be a valid email"),
  validateRequest,
  create
);

export default router;
