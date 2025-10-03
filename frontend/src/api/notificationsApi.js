import api from "./axios";

// Get notifications of a course
export const getNotifications = async (courseId) => {
  const { data } = await api.get(`/notifications/${courseId}`);
  return data;
};

// Mark notification as read
export const markAsRead = async (notificationId) => {
  const { data } = await api.put(`/notifications/read/${notificationId}`);
  return data;
};
