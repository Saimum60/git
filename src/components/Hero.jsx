import React from "react";
import bgimg from "../assets/images/all-banner.jpg";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900/50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          আজকের বাজার দর
        </h2>
        <p className="text-lg md:text-xl drop-shadow-md">
          প্রতিদিনের মাছ, মাংস ও সবজির দাম দেখুন
        </p>
      </div>
    </div>
  );
};

export default Hero;