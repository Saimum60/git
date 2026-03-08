import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Logo / Title */}
        <h1 className="text-2xl font-extrabold text-green-600 mb-4 cursor-pointer">
          বাজার .কম
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-6">
          আজকের বাজারের সব দর এক জায়গায়। মাছ, মাংস, সবজি ও আরও অনেক কিছু। 
        </p>

        {/* Social / Future Icons */}
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-green-600 transition">
            ফেসবুক
          </a>
          <a href="#" className="text-gray-400 hover:text-green-600 transition">
            ইনস্টাগ্রাম
          </a>
          <a href="#" className="text-gray-400 hover:text-green-600 transition">
            টুইটার
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs">
          © 2026 বাজার .কম All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;