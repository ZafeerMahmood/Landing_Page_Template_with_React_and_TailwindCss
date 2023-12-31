import { useState } from "react";
import { close, logo, menu } from "../assets";

import { navLinks } from "../constants";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo img" className="w-32 h-8" />

      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-base
         text-white ${index === nav.lenght - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`${nav.id}`} className="">{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className=" flex flex-1 sm:hidden justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="navlinks icon"
          className="w-7 h-7 object-contain"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />
        <div
          className={`${toggle ? "flex" : "hidden"} 
        p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-base text-white ${index === nav.lenght - 1 ? "mb-0" : "mb-4"}`}>
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
