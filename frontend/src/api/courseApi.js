import api from "./axios";


export const getAdminCourses = async () => {
  const { data } = await api.get("/courses/admin");
  return data;
};

export const createCourse = async (course) => {
  const { data } = await api.post("/courses", course);
  return data;
};

export const updateCourse = async (courseId, course) => {
  const { data } = await api.put(`/courses/${courseId}`, course);
  return data;
};

export const deleteCourse = async (courseId) => {
  const { data } = await api.delete(`/courses/${courseId}`);
  return data;
};

// Join a course
export const joinCourse = (code) => api.post(`/courses/join/${code}`);

// Get student’s enrolled courses
export const getMyCourses = () => api.get("/users/me/courses");