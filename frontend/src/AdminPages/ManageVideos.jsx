import { useState, useEffect } from "react";
import {
  getAdminCourses
} from "../api/courseApi";
import {
  addVideo,
  getVideos,
  updateVideo,
  deleteVideo
} from "../api/videosApi";

export default function ManageVideos() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  // Fetch courses
  const fetchCourses = async () => {
    try {
      const data = await getAdminCourses();
      setCourses(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch videos of selected course
  const fetchVideos = async (courseId) => {
    try {
      setLoading(true);
      const data = await getVideos(courseId);
      setVideos(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (selectedCourse) fetchVideos(selectedCourse._id);
  }, [selectedCourse]);

  // Modal handlers
  const handleAdd = () => {
    setEditingVideo(null);
    setTitle("");
    setUrl("");
    setIsModalOpen(true);
  };

  const handleEdit = (video) => {
    setEditingVideo(video);
    setTitle(video.title);
    setUrl(video.url);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    try {
      if (!selectedCourse) return;
      if (editingVideo) {
        await updateVideo(editingVideo._id, { title, url });
      } else {
        await addVideo(selectedCourse._id, { title, url });
      }
      setIsModalOpen(false);
      fetchVideos(selectedCourse._id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (videoId) => {
    if (!selectedCourse) return;
    if (window.confirm("Are you sure you want to delete this video?")) {
      try {
        await deleteVideo(videoId);
        fetchVideos(selectedCourse._id);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Videos</h1>

      {/* Select course */}
      <div className="mb-4">
        <label className="mr-2 font-semibold">Select Course:</label>
        <select
          value={selectedCourse?._id || ""}
          onChange={(e) =>
            setSelectedCourse(courses.find(c => c._id === e.target.value))
          }
          className="border px-3 py-2 rounded-lg"
        >
          <option value="">-- Select Course --</option>
          {courses.map(c => (
            <option key={c._id} value={c._id}>{c.title}</option>
          ))}
        </select>
        {selectedCourse && (
          <button
            onClick={handleAdd}
            className="ml-4 bg-pink-600 text-white px-4 py-2 rounded-lg"
          >
            + Add Video
          </button>
        )}
      </div>

      {/* Videos table */}
      {loading ? <p>Loading...</p> : (
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-pink-600 text-white">
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">URL</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {videos.map(v => (
              <tr key={v._id} className="border-b">
                <td className="py-3 px-4">{v.title}</td>
                <td className="py-3 px-4 text-blue-600 hover:underline">
                  <a href={v.url} target="_blank" rel="noreferrer">{v.url}</a>
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => handleEdit(v)}
                    className="text-pink-600 hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(v._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">
              {editingVideo ? "Edit Video" : "Add Video"}
            </h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full mb-2 px-4 py-2 border rounded-lg"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="YouTube URL"
              className="w-full mb-2 px-4 py-2 border rounded-lg"
              value={url}
              onChange={e => setUrl(e.target.value)}
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
