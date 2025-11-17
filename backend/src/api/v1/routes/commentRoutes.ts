import { Router } from "express";
import * as controller from "../controllers/commentController";
import { createCommentValidators, idParamValidator } from "../validations/commentValidation";
import { validateRequest } from "../middleware/validateRequest";

const router = Router();

router.get("/", controller.listComments);
router.get("/:id", idParamValidator, validateRequest, controller.getComment);
router.post("/", createCommentValidators, validateRequest, controller.createComment);
router.put("/:id", idParamValidator, createCommentValidators, validateRequest, controller.updateComment);
router.delete("/:id", idParamValidator, validateRequest, controller.deleteComment);

export default router;
