import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import profile from "../images/profile.jpg";

const About = () => {
  const { theme } = useContext(ThemeContext);

  // Dynamic styles based on theme
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
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Heading */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold mb-4 ${headingColor}`}>
            About Our E‑Commerce Company
          </h1>

          {/* CEO Profile and Intro Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            {/* Left Column - Text */}
            <div className="md:w-2/3 text-center md:text-left">
              <p className={`${textColor} mb-4`}>
                We are transforming the way people shop online by building a
                platform that combines convenience, variety, and innovation. Our
                e‑commerce store is designed to deliver a seamless shopping
                experience where customers can explore thousands of products,
                compare options, and make confident purchases from the comfort
                of their home.
              </p>

              <p className={`${textColor}`}>
                With a focus on security, speed, and personalization, we aim to
                redefine modern shopping. From fast delivery and secure payments
                to dedicated customer support, every feature we build is
                centered around your satisfaction. Our mission is simple: to
                connect people with products they love and create a reliable
                shopping journey that feels easy and enjoyable every single
                time.
              </p>
            </div>

            {/* Right Column - CEO Image */}
            <div className="md:w-1/3 flex flex-col items-center">
              <img
                src={profile}
                alt="CEO"
                className="w-40 h-40 rounded-full object-cover shadow-lg mb-3"
              />
              <h3 className={`text-xl font-semibold ${headingColor}`}>
                Alex Johnson
              </h3>
              <p className={`${textColor} text-sm`}>Founder & CEO</p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Who We Are",
              desc: "We are a team of passionate professionals driven to make online shopping simpler, faster, and more enjoyable. Our platform brings thousands of products to your fingertips.",
            },
            {
              title: "Our Mission",
              desc: "To connect people with the products they love by providing high-quality items, transparent pricing, and lightning-fast delivery — all while ensuring an outstanding customer experience.",
            },
            {
              title: "Our Values",
              desc: "We value customer satisfaction, innovation, and trust. Every decision we make is aimed at building long-lasting relationships and a shopping experience people can rely on.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${cardClass} rounded-2xl p-6 flex flex-col items-center text-center`}
            >
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className={`${textColor}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
