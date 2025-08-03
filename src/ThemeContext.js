import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Default");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("appTheme");
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (themeName) => {
    document.documentElement.className = "";

    if (themeName === "dark") {
      document.documentElement.classList.add("dark");
    }

    // Font switch
    if (themeName === "Colorful") {
      document.body.style.fontFamily = "'Pacifico', cursive";
      document.body.style.fontWeight = "normal";
    } else if (themeName === "dark") {
      document.body.style.fontFamily = "serif";
      document.body.style.fontWeight = "bold";
    } else {
      document.body.style.fontFamily =
        "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial";
      document.body.style.fontWeight = "normal";
    }
  };

  const toggleTheme = (newTheme) => {
    setLoading(true); // start loading
    setTimeout(() => {
      setTheme(newTheme);
      localStorage.setItem("appTheme", newTheme);
      applyTheme(newTheme);
      setLoading(false); // stop loading
    }, 500); // 500ms delay for animation
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, loading }}>
      {children}
    </ThemeContext.Provider>
  );
};
