export default function ManageStudents({ students }) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Manage Students</h1>
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-pink-600 text-white">
              <th className="py-3 px-4 text-left">Student Name</th>
              <th className="py-3 px-4 text-left">Course</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} className="border-b">
                <td className="py-3 px-4">{student.name}</td>
                <td className="py-3 px-4">{student.course}</td>
                <td className="py-3 px-4 text-center">
                  <button className="text-red-600 hover:underline">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  