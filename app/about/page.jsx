import React from "react";
import Image from "next/image";
import AboutScript from "../../public/images/about_script.png";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="m-4">
        <Navbar />
      </div>
      <div className="flex flex-row w-1/3 mx-auto smphone:w-5/6 phone:w-2/3 tablet:w-1/2 laptop:w-5/12 desktop:w-1/3">
        <Image
          src={AboutScript}
          alt="About text in green neon sign lettering"
        />
      </div>

      <div className="smphone:w-5/6 phone:w-5/6 tablet:w-3/5 laptop:w-3/4 desktop:w-3/5 mx-auto">
        {/* ABOUT */}

        <p className="mt-2 smphone:text-xl phone:text-xl tablet:text-xl laptop:text-2xl text-2xl">
          My name is Mallory and I am a passionate, solution-oriented full stack
          developer with a background in sales and account management. I&apos;m
          comfortable working with diverse teams and pride myself on my
          mid-western work ethic. With experience in JavaScript, ReactJS,
          Bootstrap, NodeJS, SQL, Python, FlaskSQL, REST APIs, and Git, I&apos;m
          capable of building both cohesive, interactive layouts and robust APIs
          to create an optimized and smooth experience for the end user.
        </p>
      </div>
      <div className="flex flex-row smphone:w-5/6 phone:w-5/6 tablet:w-3/5 laptop:w-3/4 desktop:w-3/5 mt-4 mb-4 mx-auto">
        {/* RESUME */}
        <Link
          href="/Resume.pdf"
          alt="Link to resume"
          target="_blank"
          rel="noreferrer"
        >
          <div className="border border-[#00FFF5] rounded py-2 px-4 w-full text-2xl text-[#00FFF5] font-semibold shadow-bluebtn hover:scale-105 hover:border-[#7AF98A] hover:text-[#7AF98A] hover:shadow-greenbtn transition duration-150 ease-in-out">
            RESUME
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
