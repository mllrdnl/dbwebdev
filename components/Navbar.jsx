"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between py-4 smphone:px-8 tablet:px-12 laptop:px-20 desktop:px-48">
      {/* LEFT LINKS */}
      <div className="hidden laptop:flex gap-4 w-1/2">
        {leftLinks.map((link) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>

      {/* RIGHT LINKS */}
      <div className="hidden laptop:flex flex-row justify-end gap-4 w-1/2">
        {rightLinks.map((link) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>
      {/* RESPONSIVE MENU */}
      <div className="laptop:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-[#7AF98A] rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-[#7AF98A] roundedd"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-[#7AF98A] roundedd origin-left"
          ></motion.div>
          {/* <div className="w-10 h-1 bg-[#7AF98A] rounded"></div>
          <div className="w-10 h-1 bg-[#7AF98A] rounded"></div>
          <div className="w-10 h-1 bg-[#7AF98A] rounded"></div> */}
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-[#7AF98A] flex flex-col items-center justify-center gap-8 text-4xl z-10"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.url}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
