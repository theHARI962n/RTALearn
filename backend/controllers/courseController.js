import Course from "../models/Course.js";
import User from "../models/User.js";
import { nanoid } from "nanoid"; // for generating codes

// @desc Create new course (Admin only)
export const createCourse = async (req, res) => {
  try {
    const { title, description } = req.body;

    const code = nanoid(6); // generate unique 6-char code

    const course = await Course.create({
      title,
      description,
      code,
      createdBy: req.user._id,
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all courses (any user)
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("createdBy", "name email");
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Join a course using code (Student only)
export const joinCourse = async (req, res) => {
  try {
    const { code } = req.params;

    const course = await Course.findOne({ code });
    if (!course) return res.status(404).json({ message: "Invalid course code" });

    // check if already enrolled
    if (course.students.includes(req.user._id)) {
      return res.status(400).json({ message: "Already enrolled in this course" });
    }

    // add student to course
    course.students.push(req.user._id);
    await course.save();

    // also add course to student's list
    const student = await User.findById(req.user._id);
    student.enrolledCourses.push(course._id);
    await student.save();

    res.json({ message: "Successfully joined course", course });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Remove student from course (Admin only)
export const removeStudent = async (req, res) => {
  try {
    const { courseId, studentId } = req.params;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // remove from course
    course.students = course.students.filter((id) => id.toString() !== studentId);
    await course.save();

    // remove from student
    const student = await User.findById(studentId);
    student.enrolledCourses = student.enrolledCourses.filter(
      (id) => id.toString() !== courseId
    );
    await student.save();

    res.json({ message: "Student removed from course" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
