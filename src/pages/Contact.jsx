import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const bgClass =
    theme === "dark"
      ? "bg-gray-900"
      : theme === "Colorful"
      ? "bg-gradient-to-r from-blue-50 via-purple-50 to-orange-50"
      : "bg-gray-50";

  const cardClass =
    theme === "dark"
      ? "bg-gray-800 text-gray-200"
      : theme === "Colorful"
      ? "bg-white/80 backdrop-blur-sm shadow-lg"
      : "bg-white shadow-md";

  const headingColor =
    theme === "dark"
      ? "text-white"
      : theme === "Colorful"
      ? "text-purple-600"
      : "text-blue-500";

  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <div className={`${bgClass} min-h-screen py-12`}>
      <div className="max-w-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold mb-4 ${headingColor}`}>
            Contact Us
          </h1>
          <p className={`${textColor}`}>
            Have a question or need assistance? Fill out the form below and our
            team will get back to you as soon as possible.
          </p>
        </div>

        <div className={`${cardClass} rounded-2xl p-6`}>
          <form className="space-y-4">
            <div className="text-left">
              <label className={`block mb-1 font-medium ${textColor}`}>
                Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>
            <div className="text-left">
              <label className={`block mb-1 font-medium ${textColor}`}>
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>
            <div className="text-left">
              <label className={`block mb-1 font-medium ${textColor}`}>
                Message
              </label>
              <textarea
                rows="4"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
