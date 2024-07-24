"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

const leftLinks = [
  { url: "/", title: "HOME" },
  { url: "/about", title: "ABOUT" },
];

const rightLinks = [
  { url: "/portfolio", title: "PORTFOLIO" },
  { url: "/contact", title: "CONTACT" },
];

const links = [
  { url: "/", title: "HOME" },
  { url: "/about", title: "ABOUT" },
  { url: "/portfolio", title: "PORTFOLIO" },
  { url: "/contact", title: "CONTACT" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 w-1/2">
        {leftLinks.map((link) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>

      {/* RIGHT LINKS */}
      <div className="hidden md:flex flex-row justify-end gap-4 w-1/2">
        {rightLinks.map((link) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-[#7AF98A] rounded"></div>
          <div className="w-10 h-1 bg-[#7AF98A] rounded"></div>
          <div className="w-10 h-1 bg-[#7AF98A] rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-10">
            {links.map((link) => (
              <Link href={link.url} key={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
