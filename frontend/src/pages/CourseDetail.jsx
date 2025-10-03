// src/UserPages/CourseDetail.jsx
import { useEffect, useState } from "react";
import api from "../api/axios"; // your axios instance

export default function CourseDetail({ course, goBack }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await api.get(`/videos/${course._id}`);
        setVideos(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVideos();
  }, [course._id]);

  return (
    <div>
      <button onClick={goBack} className="mb-4 text-blue-600 hover:underline">
        ← Back to My Courses
      </button>
      <h2 className="text-xl font-bold mb-4">{course.title} - Videos</h2>

      <div className="flex gap-6">
        {/* Video List */}
        <div className="w-1/3 border p-4 rounded bg-white">
          {videos.length === 0 ? (
            <p>No videos yet.</p>
          ) : (
            <ul className="space-y-3">
              {videos.map((video) => (
                <li key={video._id}>
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="text-left hover:underline"
                  >
                    {video.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Video Player */}
        <div className="flex-1">
          {selectedVideo ? (
            <div>
              <h3 className="font-semibold mb-2">{selectedVideo.title}</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={selectedVideo.url}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ) : (
            <p>Select a video to watch</p>
          )}
        </div>
      </div>
    </div>
  );
}
