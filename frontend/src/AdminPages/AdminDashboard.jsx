import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Dashboard from "../AdminPages/Dashboard";
import ManageCourses from "../AdminPages/ManageCourses";
import ManageVideos from "../AdminPages/ManageVideos";
import ManageStudents from "../AdminPages/ManageStudents";
import Attendance from "../AdminPages/Attendance";
import Notifications from "../AdminPages/Notifications";
import ProfilePage from "../pages/ProfilePage";
import AdminProfilepage from "./AdminProfilepage";

export default function AdminDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Dummy data
  const courses = [
    { id: 1, title: "Fashion Designing", students: 25, videos: 10 },
    { id: 2, title: "Tanjore Painting", students: 15, videos: 8 },
  ];

  const students = [
    { id: 1, name: "Priya Sharma", course: "Fashion Designing" },
    { id: 2, name: "Ankit R.", course: "Tanjore Painting" },
  ];

  return (
    <div className="h-screen flex bg-gray-100">
      <AdminSidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <main className="flex-1 p-10 overflow-y-auto">
        {activePage === "dashboard" && <Dashboard courses={courses} students={students} />}
        {activePage === "courses" && <ManageCourses courses={courses} />}
        {activePage === "videos" && <ManageVideos />}
        {activePage === "students" && <ManageStudents students={students} />}
        {activePage === "attendance" && <Attendance />}
        {activePage === "notifications" && <Notifications />}
        {activePage === "profile" && <ProfilePage />}
        {activePage === "adminprofile" && <AdminProfilepage />}
      </main>
    </div>
  );
}