import express from "express";
import { addVideo, getVideos, deleteVideo, updateVideo } from "../controllers/videoController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin: Add video to a course
router.post("/:courseId", protect, adminOnly, addVideo);

// Any enrolled student or admin: Get course videos
router.get("/:courseId", protect, getVideos);

// Admin: Update video
router.put("/:videoId", protect, adminOnly, updateVideo);

// Admin: Delete video
router.delete("/:videoId", protect, adminOnly, deleteVideo);

export default router;
