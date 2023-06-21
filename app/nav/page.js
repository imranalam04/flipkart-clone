import React from "react";
import Gallery from "../gallery/page";
import Sidebar from "../sidebar/Sidebar";

const Nav = () => {
  return (
    <div className="">
      <div class="flex gap-10 mx-40 mt-3">
        <div className="text-center">
          <span>Electronics</span>
        </div>
        <div className="text-center">
          <span>TVs & Appliance</span>
        </div>
        <div className="text-center">
          <span>Men</span>
        </div>
        <div className="text-center">
          <span>Women</span>
        </div>
        <div className="text-center">
          <span>Baby & kids</span>
        </div>
        <div className="text-center">
          <span>Home & Furniture</span>
        </div>
        <div className="text-center">
          <span>Sports,Books & More</span>
        </div>
        <div className="text-center">
          <span>Flights</span>
        </div>
        <div className="text-center">
          <span>Offer Zone</span>
        </div>
      </div>
      <hr className="mt-2" />
      <div className="flex w-full">
        <div className="w-2/12 h-64 bg-red-700">
          
        </div>
        <div className="w-10/12 bg-black h-72">
          <h1>World</h1>
        </div>
      </div>
    </div>
  );
};

export default Nav;
