export default function ManageCourses({ courses }) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Manage Courses</h1>
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-pink-600 text-white">
              <th className="py-3 px-4 text-left">Course</th>
              <th className="py-3 px-4">Students</th>
              <th className="py-3 px-4">Videos</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id} className="border-b">
                <td className="py-3 px-4">{course.title}</td>
                <td className="py-3 px-4 text-center">{course.students}</td>
                <td className="py-3 px-4 text-center">{course.videos}</td>
                <td className="py-3 px-4 text-center">
                  <button className="text-pink-600 hover:underline mr-2">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  