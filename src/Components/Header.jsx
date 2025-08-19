import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home, BookOpen, User, Mail, Menu } from "lucide-react";
import rx from "../assets/image/rx.png";

function Header({ collapsed, setCollapsed }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex fixed top-0 left-0 h-screen bg-gradient-to-b from-[#02343f] to-[#012A33] text-white flex-col p-6 shadow-xl transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}`}
      >
        {/* Collapse/Expand Button (Desktop) */}
        <button
          className="absolute top-5 right-[-18px] bg-[#F0EDCC] text-[#02343f] rounded-lg p-2 shadow-lg hover:bg-[#e4e1b5] transform hover:scale-105 active:scale-95 transition-all duration-200 ease-out"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span
            className={`inline-block transition-transform duration-300`}
            style={{
              transform: collapsed
                ? "rotate(0deg)" // ChevronRight, points right (sidebar retracts right)
                : "rotate(0deg)" // ChevronLeft, points left (sidebar retracts left)
            }}
          >
            {collapsed ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </span>
        </button>

        {/* Logo */}
        <div className={`flex ${collapsed ? "justify-center" : "justify-start"} mb-12`}>
          <img
            src={rx}
            alt="Logo"
            className={`${collapsed ? "w-10 h-10" : "w-20 h-20"} object-contain`}
          />
        </div>

        {/* Navigation */}
        <nav className="w-full">
          <ul className="space-y-6">
            <li>
              <Link
                to="/"
                className="flex items-center gap-3 text-lg font-semibold text-[#F0EDCC] hover:text-white transition"
              >
                <Home size={22} />
                {!collapsed && "Home"}
              </Link>
            </li>
            <li>
              <Link
                to="/poems"
                className="flex items-center gap-3 text-lg font-semibold text-[#F0EDCC] hover:text-white transition"
              >
                <BookOpen size={22} />
                {!collapsed && "Poems"}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-3 text-lg font-semibold text-[#F0EDCC] hover:text-white transition"
              >
                <User size={22} />
                {!collapsed && "About"}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-3 text-lg font-semibold text-[#F0EDCC] hover:text-white transition"
              >
                <Mail size={22} />
                {!collapsed && "Contact"}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          className="bg-[#F0EDCC] text-[#02343f] rounded-lg p-2 shadow-lg hover:bg-[#e4e1b5] transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`inline-block transition-transform duration-300`}
            style={{
              transform: mobileOpen
                ? "rotate(0deg)" // ChevronLeft, points left (sidebar retracts left)
                : "rotate(0deg)" // ChevronRight, points right (sidebar retracts right)
            }}
          >
            {mobileOpen ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </span>
        </button>
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-20 bg-gradient-to-b from-[#02343f] to-[#012A33] text-white flex flex-col items-center py-6 shadow-xl z-40">
          <img src={rx} alt="Logo" className="w-10 h-10 mb-10" />
          <nav className="flex flex-col gap-8">
            <Link to="/" className="group relative flex justify-center">
              <Home size={24} />
              <span className="absolute left-12 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Home
              </span>
            </Link>
            <Link to="/poems" className="group relative flex justify-center">
              <BookOpen size={24} />
              <span className="absolute left-12 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Poems
              </span>
            </Link>
            <Link to="/about" className="group relative flex justify-center">
              <User size={24} />
              <span className="absolute left-12 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                About
              </span>
            </Link>
            <Link to="/contact" className="group relative flex justify-center">
              <Mail size={24} />
              <span className="absolute left-12 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100  transition">
                Contact
              </span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
