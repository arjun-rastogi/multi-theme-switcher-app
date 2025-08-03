import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  // Choose footer background based on theme
  let footerClass = "";
  if (theme === "dark") {
    footerClass = "bg-gray-800";
  } else if (theme === "Colorful") {
    footerClass = "bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400";
  } else {
    footerClass = "bg-gray-100";
  }

  // Choose text color
  const textClass =
    theme === "dark"
      ? "text-gray-200"
      : theme === "Colorful"
      ? "text-white"
      : "text-gray-700";

  return (
    <footer className={`${footerClass} shadow-inner`}>
      <div className="max-w-6xl mx-auto flex justify-center items-center p-4">
        <p className={`${textClass} text-center text-sm`}>
          © 2025 MyCompany. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
