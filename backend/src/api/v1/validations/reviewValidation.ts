import { body } from "express-validator";

export const reviewValidation = [
  body("text").trim().notEmpty().withMessage("Review text cannot be empty"),
];
