import express from "express";
import { markAttendance, getAttendance } from "../controllers/attendanceController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin: Mark attendance
router.post("/:courseId", protect, adminOnly, markAttendance);

// Admin or Student: Get attendance
router.get("/:courseId", protect, getAttendance);

export default router;
