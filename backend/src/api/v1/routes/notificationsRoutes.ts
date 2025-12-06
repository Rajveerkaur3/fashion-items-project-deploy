import express from "express";
import {
  getNotificationsForUser,
  markNotificationAsRead,
  createNotification,
} from "../../../db/Notification";

const router = express.Router();

// GET /notifications?userId=123
router.get("/", async (req, res) => {
  const userId = req.query.userId as string;
  if (!userId) return res.status(400).json({ error: "User ID required" });

  try {
    const notifications = await getNotificationsForUser(userId);
    res.json(notifications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /notifications/read
router.post("/read", async (req, res) => {
  const { notificationId } = req.body;
  if (!notificationId)
    return res.status(400).json({ error: "Notification ID required" });

  try {
    const updated = await markNotificationAsRead(notificationId);
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /notifications/create
router.post("/create", async (req, res) => {
  const { userId, message } = req.body;
  if (!userId || !message)
    return res.status(400).json({ error: "Missing data" });

  try {
    const notification = await createNotification(userId, message);
    res.json(notification);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
