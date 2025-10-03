import express from "express";
import {
  createCourse,
  getCourses,
  joinCourse,
  getAdminCourses,
  removeStudent,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";

import { protect, adminOnly, studentOnly } from "../middleware/authMiddleware.js";

const router = express.Router();


// Admin: Create course
router.post("/", protect, adminOnly, createCourse);

// Admin: Get own courses
router.get("/admin", protect, adminOnly, getAdminCourses);

// Admin: Update course
router.put("/:id", protect, adminOnly, updateCourse);

// Admin: Delete course
router.delete("/:id", protect, adminOnly, deleteCourse);

// Any user: View all courses
router.get("/", protect, getCourses);

// Student: Join a course by code
router.post("/join/:code", protect, studentOnly, joinCourse);

// Admin: Remove student from course
router.delete("/:courseId/remove/:studentId", protect, adminOnly, removeStudent);

export default router;
