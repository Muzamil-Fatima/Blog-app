import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 mt-20">

      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold text-cyan-400">Blogify</h1>

          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            A modern premium blog platform built with React & Tailwind.
          </p>

          <p className="mt-4 text-sm text-cyan-300">
            Designed & Built by{" "}
            <span className="font-semibold text-white">Muzamil</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">
            Quick Links
          </h2>

          <div className="flex flex-col gap-2 text-sm sm:text-base">
            <Link to="/" className="hover:text-cyan-400 transition">
              Home
            </Link>
            <Link to="/create" className="hover:text-cyan-400 transition">
              Create Blog
            </Link>
            <Link to="/dashboard" className="hover:text-cyan-400 transition">
              Dashboard
            </Link>
            <Link to="/login" className="hover:text-cyan-400 transition">
              Login
            </Link>
          </div>
        </div>

        {/* Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">
            About
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Built for learning full-stack development with React, Tailwind CSS,
            and modern UI design principles.
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-5 text-center text-slate-500 text-xs sm:text-sm px-4">
        © {new Date().getFullYear()} Blogify. All rights reserved. | Made with ❤️ by Muzamil
      </div>

    </footer>
  );
}

export default Footer;