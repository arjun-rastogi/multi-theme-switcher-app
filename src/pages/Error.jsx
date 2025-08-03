import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

const Error = () => {
  const { theme } = useContext(ThemeContext);

  const bgClass =
    theme === "dark"
      ? "bg-gray-900"
      : theme === "Colorful"
      ? "bg-gradient-to-r from-blue-50 via-purple-50 to-orange-50"
      : "bg-gray-50";

  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const headingColor =
    theme === "dark"
      ? "text-red-400"
      : theme === "Colorful"
      ? "text-purple-700"
      : "text-red-500";

  // Card background adjusts based on theme
  const cardBgClass =
    theme === "dark" ? "bg-gray-800/70 backdrop-blur-sm" : "bg-white shadow-lg";

  return (
    <div
      className={`${bgClass} flex justify-center items-center min-h-screen px-4`}
    >
      <div className={`text-center p-8 rounded-2xl ${cardBgClass}`}>
        <h1 className={`text-6xl font-extrabold mb-4 ${headingColor}`}>404</h1>
        <p className={`${textColor} mb-6 text-lg`}>
          Oops! The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
