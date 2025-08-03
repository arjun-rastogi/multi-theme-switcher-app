import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import banner from "../images/banner.png";

const HeroSection = () => {
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

  const cardData = [
    {
      title: "Shop Anything",
      description:
        "From electronics to fashion, explore a wide range of products that meet your needs.",
    },
    {
      title: "Fast Delivery",
      description:
        "Experience lightning-fast delivery with real-time tracking for every order.",
    },
    {
      title: "Customer Support",
      description:
        "Our support team is available 24/7 to assist you with any questions or concerns.",
    },
  ];

  return (
    <div className={`${bgClass} min-h-screen`}>
      {/* Banner */}
      <div className="w-full">
        <img
          src={banner}
          alt="Store Banner"
          className="w-full h-64 object-cover md:h-96"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${headingColor}`}>
            Welcome to Our E‑Commerce Store
          </h1>
          <p className={`${textColor} max-w-2xl mx-auto`}>
            Discover thousands of products at your fingertips. Shop with ease
            and enjoy fast, secure, and reliable delivery.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid gap-8 md:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`${cardClass} rounded-2xl p-6 flex flex-col items-center text-center`}
            >
              <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
              <p className={`${textColor}`}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
