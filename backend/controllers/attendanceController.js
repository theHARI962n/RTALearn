import Attendance from "../models/Attendance.js";
import Course from "../models/Course.js";

// @desc Mark attendance (Admin only)
export const markAttendance = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { records } = req.body; // [{ studentId, present }]

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Ensure user is the teacher of the course
    if (req.user.role !== "admin" || course.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to mark attendance" });
    }

    const date = new Date().setHours(0, 0, 0, 0);

    // check if attendance already exists for today
    let attendance = await Attendance.findOne({ courseId, date });
    if (attendance) {
      attendance.records = records;
      await attendance.save();
    } else {
      attendance = await Attendance.create({ courseId, date, records });
    }

    res.json({ message: "Attendance saved", attendance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get attendance for a course (Admin: full list, Student: only self)
export const getAttendance = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    let attendanceRecords = await Attendance.find({ courseId }).populate("records.studentId", "name email");

    if (req.user.role === "student") {
      // filter to only the logged-in student's records
      attendanceRecords = attendanceRecords.map((a) => ({
        date: a.date,
        present: a.records.find((r) => r.studentId._id.toString() === req.user._id.toString())?.present || false,
      }));
    }

    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
