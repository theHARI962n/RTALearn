import express from "express";
import { addVideo, getVideos, deleteVideo } from "../controllers/videoController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin: Add video to a course
router.post("/:courseId", protect, adminOnly, addVideo);

// Any enrolled student or admin: Get course videos
router.get("/:courseId", protect, getVideos);

// Admin: Delete video
router.delete("/:videoId", protect, adminOnly, deleteVideo);

export default router;
