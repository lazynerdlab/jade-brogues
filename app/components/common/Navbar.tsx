"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "@/public/assets/images/logo-white.png";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-jade-and-brogue-primary border-b w-full sticky top-0 py-4 md:py-0 md:border-none z-[999]">
      <div className="items-center px-4 max-w-[1400px] mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image src={Logo} width={270} height={35} alt="Logo" />
          </Link>
          <div className="md:hidden">
            <button
              className="text-white hover:text-gray-500"
              onClick={() => setState(!state)}
            >
              {state ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <IoMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-white hover:text-gray-200">
                  <Link
                    href={item.path}
                    className="group transition duration-300"
                  >
                    {item.title}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
