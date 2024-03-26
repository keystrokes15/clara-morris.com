"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";


const navbarLinks = [
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "About",
    path: "#about",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border-b border-b-zinc-700 top-0 left-0 right-0 z-10 bg-zinc-950 bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-42xl text-white font-semibold">
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button 
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-zinc-400 hover:text-white hover:border-white"
            ><Bars3Icon className="h-5 w-5" /></button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2  text-zinc-400 hover:text-white hover:border-white"
            ><XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navbarLinks.map((link, index) => (
              <li key={index}>
                <NavbarLinks href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navbarLinks} /> : null}
    </nav>
  );
};

export default Navbar;