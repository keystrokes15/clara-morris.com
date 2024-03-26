import React from "react";
import Link from "next/link";

const NavbarLinks = ({ href, title }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 50; // adjust as needed
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} className="block py-2 pl-3 pr-4 text-zinc-400 sm:text-xl rounded md:p-0 hover:text-white">
      {title}
    </a>
  );
};

export default NavbarLinks;
