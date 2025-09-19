export default function AttendancePage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Attendance</h1>
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-pink-600 text-white">
              <th className="py-3 px-4 text-left">Course</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4">Fashion Designing</td>
              <td className="py-3 px-4">2025-09-15</td>
              <td className="py-3 px-4 text-green-600">Present</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Mural Painting</td>
              <td className="py-3 px-4">2025-09-14</td>
              <td className="py-3 px-4 text-red-600">Absent</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  