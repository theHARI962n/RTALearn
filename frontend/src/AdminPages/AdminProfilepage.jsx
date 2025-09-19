import { useState } from "react";

export default function AdminProfile() {
  const [name, setName] = useState("Renu (Teacher)");
  const [email] = useState("renu.teacher@example.com"); // fixed email
  const [password, setPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Updated:", { name, password });
    alert("Profile updated!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-lg p-8">
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">
          Admin Profile
        </h2>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Admin Profile"
            className="w-24 h-24 rounded-full border-4 border-pink-300 shadow-md"
          />
          <p className="text-gray-600 mt-2">Teacher</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              disabled
              className="mt-1 w-full px-4 py-3 border rounded-lg bg-gray-100 text-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">New Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter new password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
