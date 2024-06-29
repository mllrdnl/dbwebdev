"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded-lg p-2 ${
        pathName === link.url &&
        "border border-[#C434C4] shadow-md shadow-[rgb(227,143,229,0.8)] font-semibold text-[#78efc0]"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
