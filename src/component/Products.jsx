import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../ThemeContext";

const Products = () => {
  const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={`${bgClass} min-h-screen py-12`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${headingColor}`}>
            Our Products
          </h1>
          <p className={`${textColor}`}>
            Browse through our collection of top products.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className={`${cardClass} rounded-2xl p-4 flex flex-col`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold line-clamp-1 mb-2">
                {product.title}
              </h2>
              <p className={`${textColor} text-sm line-clamp-3 mb-4`}>
                {product.description}
              </p>
              <div className="mt-auto">
                <p className="text-blue-600 font-bold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
