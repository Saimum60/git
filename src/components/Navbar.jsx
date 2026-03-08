import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="shadow-md py-4 bg-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold text-green-600 cursor-pointer">বাজার .কম</h1>

        <div className="hidden md:flex gap-6">
          <a href="#">হোম</a>
          <a href="#">পণ্য</a>
          <a href="#">যোগাযোগ</a>
        </div>

        <input
          type="text"
          placeholder="সার্চ করুন..."
          className="border px-3 py-1 rounded md:block hidden"
        />

      <div className="flex gap-x-3">
        <a className="text-2xl" href="#"><FaCartShopping /></a>
        <a className="text-2xl" href="#"><VscAccount /></a>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;