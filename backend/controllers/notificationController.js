import Notification from "../models/Notification.js";
import Course from "../models/Course.js";

// @desc Add a video to course (Admin only) — updated
export const addVideo = async (req, res) => {
  try {
    const { title, url } = req.body;
    const { courseId } = req.params;

    const course = await Course.findById(courseId).populate("students");
    if (!course) return res.status(404).json({ message: "Course not found" });

    const video = await Video.create({ title, url, courseId });

    // link video to course
    course.videos.push(video._id);
    await course.save();

    // --- Create notification for all enrolled students ---
    if (course.students.length > 0) {
      const message = `New video added: "${title}" in course "${course.title}"`;
      await Notification.create({
        courseId,
        message,
        createdBy: req.user._id,
        recipients: course.students.map(s => s._id), // all enrolled students
      });
    }

    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// @desc Send notification (Admin only)
export const sendNotification = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { message, recipients } = req.body; // recipients optional

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    if (req.user.role !== "admin" || course.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const notification = await Notification.create({
      courseId,
      message,
      createdBy: req.user._id,
      recipients: recipients || [],
    });

    res.json({ message: "Notification sent", notification });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get notifications (Student or Admin)
export const getNotifications = async (req, res) => {
  try {
    const { courseId } = req.params;

    const query = { courseId };

    // If student → only notifications for them (or general)
    if (req.user.role === "student") {
      query.$or = [{ recipients: [] }, { recipients: req.user._id }];
    }

    const notifications = await Notification.find(query)
      .populate("createdBy", "name")
      .sort({ createdAt: -1 });

    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Mark as read
export const markAsRead = async (req, res) => {
  try {
    const { notificationId } = req.params;

    const notification = await Notification.findById(notificationId);
    if (!notification) return res.status(404).json({ message: "Notification not found" });

    if (!notification.readBy.includes(req.user._id)) {
      notification.readBy.push(req.user._id);
      await notification.save();
    }

    res.json({ message: "Marked as read" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
