import { useEffect, useState } from "react";
import { getMyCourses } from "../api/courseApi"; // ✅ api wrapper
import CourseDetail from "./CourseDetail"; // ✅ import the new component

export default function MyCourses() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null); // ✅ track selected course

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await getMyCourses(); 
        setCourses(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourses();
  }, []);

  // ✅ If a course is selected, show CourseDetail
  if (selectedCourse) {
    return (
      <CourseDetail
        course={selectedCourse}
        goBack={() => setSelectedCourse(null)}
      />
    );
  }

  // ✅ Otherwise, show course list
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Courses</h2>
      {courses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        <ul className="space-y-3">
          {courses.map((course) => (
            <li
              key={course._id}
              onClick={() => setSelectedCourse(course)} // ✅ select course on click
              className="p-4 border rounded bg-white cursor-pointer hover:shadow"
            >
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p>{course.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


// import { useEffect, useState } from "react";
// import { getMyCourses } from "../api/courseApi"; // ✅ use api wrapper

// export default function MyCourses() {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const { data } = await getMyCourses(); // ✅ authenticated call
//         setCourses(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">My Courses</h2>
//       {courses.length === 0 ? (
//         <p>No courses enrolled yet.</p>
//       ) : (
//         <ul className="space-y-3">
//           {courses.map((course) => (
//             <li key={course._id} className="p-4 border rounded bg-white">
//               <h3 className="text-lg font-semibold">{course.title}</h3>
//               <p>{course.description}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
