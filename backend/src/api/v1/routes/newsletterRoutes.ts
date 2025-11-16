import { Router } from "express";
import { getAll, create } from "../controllers/newsletterController";
import { validateEmail } from "../middleware/validateEmail";

const router = Router();

router.get("/", getAll);
router.post("/", validateEmail, create);

export default router;
