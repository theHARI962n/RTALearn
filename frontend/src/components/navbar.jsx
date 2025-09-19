import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for mobile toggle

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Courses", href: "#courses" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 mx-6 md:mx-20">
      <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg border border-gray-200">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900">
          Renu Thread & Brush Arts
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-600">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="relative hover:text-gray-900 transition group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Login */}
        <Link
          to="/login"
          className="hidden md:inline-block px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition shadow"
        >
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 rounded-xl bg-white/90 backdrop-blur-md shadow-lg p-4 space-y-4 font-medium text-gray-700 border border-gray-200">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="block hover:text-pink-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/login"
            className="block text-center px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition shadow"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
