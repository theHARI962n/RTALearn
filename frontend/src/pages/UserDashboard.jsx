import { useState } from "react";
import Sidebar from "../components/SideBar";
import DashboardTwo from "./DashboardTwo";
import JoinPage from "./JoinPage";
import NotificationsPage from "./NotificationsPage";
import AttendancePage from "./AttendancePage";
import ProfilePage from "./ProfilePage";

export default function UserDashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  // Dummy data for dashboard
  const courses = [
    { id: 1, title: "Fashion Designing Course", progress: 60 },
    { id: 2, title: "Tanjore Painting Course", progress: 20 },
  ];

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {activePage === "dashboard" && <DashboardTwo courses={courses} />}
        {activePage === "join" && <JoinPage />}
        {activePage === "notifications" && <NotificationsPage />}
        {activePage === "attendance" && <AttendancePage />}
        {activePage === "profile" && <ProfilePage />}
      </main>
    </div>
  );
}
