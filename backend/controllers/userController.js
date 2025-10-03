import User from "../models/User.js";

// @desc Get courses the student is enrolled in
export const getStudentCourses = async (req, res) => {
  try {
    const student = await User.findById(req.user._id).populate("enrolledCourses");
    res.json(student.enrolledCourses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
