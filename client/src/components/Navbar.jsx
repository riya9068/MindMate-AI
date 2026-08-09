import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// export default Navbar;
const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center shadow-lg">

            <span className="text-white text-2xl">🧠</span>

          </div>

          <div>

            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              MindMate AI
            </h1>

            <p className="text-xs text-gray-500">
              Mental Wellness Companion
            </p>

          </div>

        </div>

        {/* Menu */}

        <ul className="hidden md:flex items-center gap-8 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-blue-600 transition relative after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#features"
              className="hover:text-purple-600 transition relative after:absolute after:w-0 after:h-[2px] after:bg-purple-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-600 transition relative after:absolute after:w-0 after:h-[2px] after:bg-cyan-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
            >
              About
            </a>
          </li>

        </ul>

        {/* Buttons */}

        <div className="flex items-center gap-4">

          {/* <button className="px-5 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">

            Login

          </button> */}
            <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
            Login
            </Link>
{/* 
          <button className="px-5 py-2 rounded-xl text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:scale-105 shadow-lg transition duration-300">

            Get Started

          </button> */}
          <Link
to="/register"
className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full"
>
Get Started
</Link>
    <div
  onClick={() => setDarkMode(!darkMode)}
  className="text-2xl cursor-pointer hover:scale-110 transition"
>
  {darkMode ? "☀️" : "🌙"}
</div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;