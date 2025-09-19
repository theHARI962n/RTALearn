export default function DashboardTwo({ courses }) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Welcome Back 👋</h1>
        <h2 className="text-xl mb-4">Your Enrolled Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-pink-600 h-3 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Progress: {course.progress}%
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  