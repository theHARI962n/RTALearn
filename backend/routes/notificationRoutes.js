import express from "express";
import { sendNotification, getNotifications, markAsRead } from "../controllers/notificationController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin sends notification
router.post("/:courseId", protect, adminOnly, sendNotification);

// Get all notifications for course
router.get("/:courseId", protect, getNotifications);

// Mark notification as read
router.put("/read/:notificationId", protect, markAsRead);

export default router;
