export default function Dashboard({ courses, students }) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-lg">Total Courses</h3>
            <p className="text-2xl font-bold">{courses.length}</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-lg">Total Students</h3>
            <p className="text-2xl font-bold">{students.length}</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-lg">Total Videos</h3>
            <p className="text-2xl font-bold">{courses.reduce((acc, c) => acc + c.videos, 0)}</p>
          </div>
        </div>
      </div>
    );
  }
  