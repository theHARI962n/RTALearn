import api from "./axios"; // assuming you already have axios instance

// Get all videos of a course
export const getVideos = async (courseId) => {
  const { data } = await api.get(`/videos/${courseId}`);
  return data;
};

// Add video to course
export const addVideo = async (courseId, video) => {
  const { data } = await api.post(`/videos/${courseId}`, video);
  return data;
};

// Update video
export const updateVideo = async (videoId, video) => {
  const { data } = await api.put(`/videos/${videoId}`, video);
  return data;
};

// Delete video
export const deleteVideo = async (videoId) => {
  const { data } = await api.delete(`/videos/${videoId}`);
  return data;
};
