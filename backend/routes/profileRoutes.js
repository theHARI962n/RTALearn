import express from "express";
import { getProfile, updateProfile, changePassword } from "../controllers/profileController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getProfile);          // GET profile
router.put("/", protect, updateProfile);       // Update name/email
router.put("/password", protect, changePassword); // Change password

export default router;
