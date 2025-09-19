export default function JoinPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Join a New Course</h1>
        <input
          type="text"
          placeholder="Enter course code"
          className="w-full md:w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button className="ml-3 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
          Join
        </button>
      </div>
    );
  }
  