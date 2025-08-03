import React, { Suspense, lazy } from "react";

// Lazy imports
const HeroSection = lazy(() => import("../component/HeroSection"));
const Products = lazy(() => import("../component/Products"));

const Home = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      }
    >
      <HeroSection />
      <Products />
    </Suspense>
  );
};

export default Home;
