import { body, param } from "express-validator";

export const createCommentValidators = [
  body("category").isString().notEmpty().withMessage("Category required"),
  body("text").isString().isLength({ min: 3 }).withMessage("Text must be at least 3 chars"),
];

export const idParamValidator = [
  param("id").isInt({ gt: 0 }).toInt().withMessage("Id must be a positive integer"),
];
