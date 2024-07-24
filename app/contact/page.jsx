import React from "react";
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  return (
    <div className="h-full w-full flex flex-col mb-10">
      <div className="m-4">
        <Navbar />
      </div>
      <div className="flex flex-row mx-auto text-5xl font-bold">
        LET'S CREATE SOMETHING TOGETHER!
      </div>
      <div></div>
    </div>
  );
};

export default ContactPage;
