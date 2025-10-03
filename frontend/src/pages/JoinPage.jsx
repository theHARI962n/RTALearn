import { useState } from "react";
import { joinCourse } from "../api/courseApi"; // ✅ use api wrapper

export default function JoinPage({ setActivePage }) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleJoin = async () => {
    try {
      await joinCourse(code);   // ✅ now authenticated request
      setMessage("Successfully joined!");
      setActivePage("courses"); // ✅ go to MyCourses tab
    } catch (error) {
      setMessage(error.response?.data?.message || "Error joining course");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Join a Course</h2>
      <input
        type="text"
        placeholder="Enter course code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="border px-3 py-2 mr-2"
      />
      <button onClick={handleJoin} className="bg-blue-600 text-white px-4 py-2 rounded">
        Join
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
