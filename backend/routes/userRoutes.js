import express from "express";
import { getStudentCourses } from "../controllers/userController.js";
import { protect, studentOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Student: get own courses
router.get("/me/courses", protect, studentOnly, getStudentCourses);

export default router;
