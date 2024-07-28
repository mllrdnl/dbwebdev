"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactScript from "../../public/images/contactme_script.png";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="h-full w-full flex flex-col mb-10">
      <div className="m-4">
        <Navbar />
      </div>
      <div className="lex flex-row w-1/3 smphone:w-5/6 phone:w-2/3 tablet:w-1/2 laptop:w-5/12 desktop:w-2/5 mx-auto justify-center">
        <Image src={ContactScript} alt="contact me" />
      </div>
      <div className="flex flex-row mx-auto">
        <div className="w-5/6 font-mendlSansDawn mx-auto justify-center text-center text-3xl text-[#00FFF5]">
          LET&apos;S CREATE SOMETHING TOGETHER!
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
