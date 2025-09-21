import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// 🔐 Protected route (admin only)
router.get("/admin-test", protect, adminOnly, (req, res) => {
    res.json({ message: `Welcome Admin ${req.user.name}` });
  });

export default router;
