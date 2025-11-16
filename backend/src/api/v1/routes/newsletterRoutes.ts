// backend/src/api/v1/routes/newsletterRoutes.ts
import { Router } from "express";

type Subscriber = {
  id: number;
  email: string;
  createdAt: string;
};

const store: Subscriber[] = [];

const router = Router();

router.get("/", (req, res) => {
  res.json([...store].sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
});

router.post("/", (req, res) => {
  const { email } = req.body;
  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Invalid email" });
  }
  if (store.some(s => s.email.toLowerCase() === email.toLowerCase())) {
    return res.status(409).json({ error: "Email already subscribed" });
  }
  const id = store.length ? store[store.length - 1].id + 1 : 1;
  const rec: Subscriber = { id, email, createdAt: new Date().toISOString() };
  store.push(rec);
  return res.status(201).json(rec);
});

export default router;
