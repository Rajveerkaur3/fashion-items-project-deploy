import { Router } from "express";
import * as controller from "../controllers/commentController";
import { createCommentValidators, idParamValidator } from "../validations/commentValidation";
import { validateRequest } from "../middleware/validateRequest";
import { requireAuth } from "../middleware/auth"; 

const router = Router();

// Public routes (anyone can view comments)
router.get("/", controller.listComments);
router.get("/:id", idParamValidator, validateRequest, controller.getComment);

// Protected routes (only signed-in users can create/update/delete)
router.post("/", requireAuth, createCommentValidators, validateRequest, controller.createComment);
router.put("/:id", requireAuth, idParamValidator, createCommentValidators, validateRequest, controller.updateComment);
router.delete("/:id", requireAuth, idParamValidator, validateRequest, controller.deleteComment);

export default router;
