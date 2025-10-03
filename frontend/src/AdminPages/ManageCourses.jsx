import { useState, useEffect } from "react";
import { getAdminCourses, createCourse, updateCourse, deleteCourse } from "../api/courseApi";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Fetch courses
  const fetchCourses = async () => {
    try {
      const data = await getAdminCourses();
      setCourses(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Open modal for create
  const handleAdd = () => {
    setEditingCourse(null);
    setTitle("");
    setDescription("");
    setIsModalOpen(true);
  };

  // Open modal for edit
  const handleEdit = (course) => {
    setEditingCourse(course);
    setTitle(course.title);
    setDescription(course.description);
    setIsModalOpen(true);
  };

  // Save course (create or update)
  const handleSave = async () => {
    try {
      if (editingCourse) {
        await updateCourse(editingCourse._id, { title, description });
      } else {
        await createCourse({ title, description });
      }
      setIsModalOpen(false);
      fetchCourses();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete course
  const handleDelete = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await deleteCourse(courseId);
        fetchCourses();
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Courses</h1>
        <button
          onClick={handleAdd}
          className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
        >
          + Add Course
        </button>
      </div>

      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-pink-600 text-white">
            <th className="py-3 px-4 text-left">Course</th>
            <th className="py-3 px-4 text-center">Code</th>
            <th className="py-3 px-4 text-center">Students</th>
            <th className="py-3 px-4 text-center">Videos</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id} className="border-b">
              <td className="py-3 px-4">{course.title}</td>
              <td className="py-3 px-4 text-center font-mono">{course.code}</td>
              <td className="py-3 px-4 text-center">{course.students?.length || 0}</td>
              <td className="py-3 px-4 text-center">{course.videos?.length || 0}</td>

              <td className="py-3 px-4 text-center">
                <button
                  onClick={() => handleEdit(course)}
                  className="text-pink-600 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">
              {editingCourse ? "Edit Course" : "Add Course"}
            </h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full mb-2 px-4 py-2 border rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              className="w-full mb-2 px-4 py-2 border rounded-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex justify-end space-x-2 mt-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-pink-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
