"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      // className={`rounded-lg p-2 ${
      //   pathName === link.url &&
      //   "border-2 border-[#E38FFF] font-extrabold text-[#78efc0]"
      // }`}
      className={
        pathName === link.url && `${link.url}/slug`
          ? `rounded-lg p-1 text-3xl font-rollerScript lowercase font-bold text-[#78efc0]`
          : `rounded-lg p-2 text-xl font-semibold`
      }
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
