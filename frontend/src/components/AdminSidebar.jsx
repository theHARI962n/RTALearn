import { Menu, ChevronLeft, Home, BookOpen, UserPlus, Bell, Calendar, User,UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminSidebar({ activePage, setActivePage, isCollapsed, setIsCollapsed }) {

  const navigate = useNavigate();


    const handleLogout = () => {
      localStorage.removeItem("token"); // remove JWT
      navigate("/"); // redirect to landing page
    };


  const navItems = [
    { key: "dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { key: "courses", label: "Manage Courses", icon: <BookOpen size={20} /> },
    { key: "videos", label: "Manage Videos", icon: <UserPlus size={20} /> },
    { key: "students", label: "Manage Students", icon: <User size={20} /> },
    { key: "attendance", label: "Attendance", icon: <Calendar size={20} /> },
    { key: "notifications", label: "Notifications", icon: <Bell size={20} /> },
    { key: "adminprofile", label: "Profile", icon: <UserCircle size={20} /> },
  ];

  return (
    <aside className={`${isCollapsed ? "w-20" : "w-64"} bg-white shadow-lg p-6 flex flex-col transition-all duration-300`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mb-6 py-2 rounded hover:bg-gray-100"
      >
        {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
      </button>

      {/* Title */}
      {!isCollapsed && <h2 className="text-2xl font-bold text-pink-700 mb-8">Admin Panel</h2>}

      {/* Nav Items */}
      <nav className="flex flex-col space-y-6 flex-1">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActivePage(item.key)}
            className={`flex items-center gap-2 text-left truncate ${
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
        className="text-left text-gray-700 hover:text-red-600 mt-auto flex items-center gap-2">
          {isCollapsed ? "⏻" : "Logout"}
        </button>
      </nav>
    </aside>
  );
}
