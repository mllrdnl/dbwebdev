import React from "react";

const AboutPage = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="w-3/4 mt-6 flex flex-row gap-4">
        {/* BUTTONS */}
        {/* <button className="p-4 rounded-lg ring-1">ABOUT ME</button> */}
      </div>
      <div className="w-1/2 mt-2 mx-auto">
        {/* ABOUT */}
        <h1 className="text-2xl font-bold text-[#78EFC0]">About Me</h1>
        <p className="mt-4">
          I am a passionate, solution-oriented full stack developer with a
          background in sales and account management. I&apos;m comfortable
          working with diverse teams and pride myself on my mid-western work
          ethic. With experience in JavaScript, ReactJS, Bootstrap, NodeJS, SQL,
          Python, FlaskSQL, REST APIs, and Git, I&apos;m capable of building
          both cohesive, interactive layouts and robust APIs to create an
          optimized and smooth experience for the end user.
        </p>
      </div>
      <div className="flex flex-row w-1/2 mt-4 items-start">
        {/* RESUME */}
        <button className="p-4 rounded-lg border">RESUME</button>
      </div>
    </div>
  );
};

export default AboutPage;
