import { useState } from "react";
import { Menu, ChevronLeft, Home, BookOpen, UserPlus, Bell, Calendar, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ activePage, setActivePage }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();


    const handleLogout = () => {
      localStorage.removeItem("token"); // remove JWT
      navigate("/"); // redirect to landing page
    };



  const navItems = [
    { key: "dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { key: "courses", label: "My Courses", icon: <BookOpen size={20} /> },
    { key: "join", label: "Join Course", icon: <UserPlus size={20} /> },
    { key: "notifications", label: "Notifications", icon: <Bell size={20} /> },
    { key: "attendance", label: "Attendance", icon: <Calendar size={20} /> },
    { key: "profile", label: "Profile", icon: <UserCircle size={20} /> },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-white shadow-lg p-6 flex flex-col transition-all duration-300`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mb-6 py-4 rounded hover:bg-gray-100"
      >
        {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
      </button>

      {/* Title */}
      {!isCollapsed && (
        <h2 className="text-2xl font-bold text-pink-700 mb-8">Student Panel</h2>
      )}

      {/* Nav Items */}
      <nav className="flex flex-col space-y-6 flex-1">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActivePage(item.key)}
            className={`flex items-center gap-2 truncate ${
              activePage === item.key
                ? "font-bold text-pink-600"
                : "text-gray-700 hover:text-pink-600"
            }`}
          >
            {item.icon}
            {!isCollapsed && item.label}
          </button>
        ))}

        {/* Logout */}
        <button onClick={handleLogout}
          className="flex items-center gap-2 text-gray-700 hover:text-red-600 mt-auto">
          {isCollapsed ? "⏻" : <>⏻ Logout</>}
        </button>
      </nav>
    </aside>
  );
}
