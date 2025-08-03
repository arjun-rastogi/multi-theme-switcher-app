import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 dark:bg-black/40 z-50 transition-opacity">
      {/* Cute small loader */}
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-t-2 border-blue-500 border-t-transparent"></div>
    </div>
  );
};

export default Loader;
