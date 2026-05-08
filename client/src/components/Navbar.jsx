import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block transition duration-300 hover:text-cyan-400 hover:scale-105 ${
      isActive ? "text-cyan-400" : "text-white"
    }`;

  return (
    <div className="bg-slate-900 border-b border-slate-700">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-cyan-400 cursor-pointer hover:text-cyan-300 transition">
          Blogify
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/blogs" className={linkClass}>
            Blogs
          </NavLink>
          <NavLink to="/create" className={linkClass}>
            Create Blog
          </NavLink>
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-5 text-lg font-medium">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink
            to="/blogs"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Blogs
          </NavLink>

          <NavLink
            to="/create"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Create Blog
          </NavLink>

          <NavLink
            to="/dashboard"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Dashboard
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
