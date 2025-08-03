import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import appLogo from "../images/app-logo.png";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // Decide navbar classes based on theme
  let navbarClass = "";
  if (theme === "dark") {
    navbarClass = "bg-gray-800";
  } else if (theme === "Colorful") {
    // Mixture of blue, purple, and orange
    navbarClass = "bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400";
  } else {
    // Default (light)
    navbarClass = "bg-gray-100";
  }

  // Text color for links
  const linkClass =
    theme === "dark"
      ? "text-gray-200 hover:underline"
      : theme === "Colorful"
      ? "text-white hover:underline"
      : "text-black hover:underline";

  return (
    <header className={`${navbarClass} shadow-md`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <img src={appLogo} alt="App Logo" className="h-10" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              style={{ textDecoration: "none" }}
              className={`${linkClass} relative group px-2 py-1 transition-colors`}
            >
              {item.label}
              {/* underline animation */}
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-500 dark:bg-gray-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Theme Selector */}
        <select
          value={theme}
          onChange={(e) => toggleTheme(e.target.value)}
          className="ml-4 border rounded p-1 text-sm"
        >
          <option value="Default">Default</option>
          <option value="dark">Dark</option>
          <option value="Colorful">Colorful</option>
        </select>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-2xl text-white md:text-black">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden p-4 ${navbarClass}`}>
          <Link
            className={`block py-2 ${linkClass}`}
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className={`block py-2 ${linkClass}`}
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className={`block py-2 ${linkClass}`}
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
