import express from "express";
import { PrismaClient } from "../../../generated/prisma";
import { requireAuth } from "../middleware/auth";

const router = express.Router();
const prisma = new PrismaClient();



router.get("/me", requireAuth, async (req: any, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { clerkId: req.userId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: { clerkId: true, email: true, createdAt: true },
    });

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
