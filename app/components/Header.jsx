import React from "react";
import Image from "next/image";
import fk from "@/public/assets/fk.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-1 bg-[#2874f0] text-white justify-between px-36 py-1 items-center ">
      <div className="flex">
        <Image src={fk} />
      </div>
      <form className="flex-[2] flex">
        <input
          type="text"
          className="bg-white border-0 outline-0  px-2 py-1 w-10/12 mx-4"
          placeholder="Search for products, brands and more"
        />
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
      </form>
      <div className="flex gap-10 justify-center">
        <Link
          href=""
          className="bg-white px-10 py-1"
          style={{ color: "#2874f0" }}
        >
          Login
        </Link>
        <Link href="">Become a Seller</Link>
        <Link href="">More</Link>
        <Link href="/viewcart">Cart</Link>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
