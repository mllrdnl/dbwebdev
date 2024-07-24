"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BackImg from "../public/images/back_sign_v2.png";
import HomeBolt from "../public/bolt_on.png";

const PageNav = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-row justify-between max-h-32">
        {/* HEADER BUTTONS */}
        <div className="h-36 w-36 m-8 hover:scale-110">
          <button type="button" onClick={() => router.back()}>
            <Image src={BackImg} alt="Back" />
          </button>
        </div>

        <div className="h-24 w-24 m-10 hover:scale-110">
          <Link href="/">
            <Image src={HomeBolt} alt="Home" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNav;
