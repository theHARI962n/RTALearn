import Video from "../models/Video.js";
import Course from "../models/Course.js";

// @desc Add a video to course (Admin only)
export const addVideo = async (req, res) => {
  try {
    const { title, url } = req.body;
    const { courseId } = req.params;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const video = await Video.create({ title, url, courseId });

    // link video to course
    course.videos.push(video._id);
    await course.save();

    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all videos of a course (Any enrolled user)
export const getVideos = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findById(courseId).populate("videos");
    if (!course) return res.status(404).json({ message: "Course not found" });

    // ensure student is enrolled OR admin is owner
    if (
      req.user.role === "student" &&
      !course.students.includes(req.user._id)
    ) {
      return res.status(403).json({ message: "Not enrolled in this course" });
    }

    res.json(course.videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Update video (Admin only)
export const updateVideo = async (req, res) => {
  try {
    const { videoId } = req.params;
    const { title, url } = req.body;

    const video = await Video.findById(videoId);
    if (!video) return res.status(404).json({ message: "Video not found" });

    video.title = title || video.title;
    video.url = url || video.url;

    await video.save();
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// @desc Delete video (Admin only)
export const deleteVideo = async (req, res) => {
  try {
    const { videoId } = req.params;

    const video = await Video.findById(videoId);
    if (!video) return res.status(404).json({ message: "Video not found" });

    await Course.findByIdAndUpdate(video.courseId, {
      $pull: { videos: video._id },
    });

    await video.deleteOne();

    res.json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
