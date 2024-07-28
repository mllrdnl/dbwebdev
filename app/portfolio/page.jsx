import React from "react";
import Image from "next/image";
import Link from "next/link";
import projData from "../../data.json";
import ProjectScript from "../../public/images/projects_script.png";
import projectGallery from "../../public/images/projectgallery.png";
import Navbar from "@/components/Navbar";
import PosterCard from "../../components/posterCard";

const PortfolioPage = () => {
  return (
    <div className="h-full w-full flex flex-col mb-10">
      <div className="m-4">
        <Navbar />
      </div>
      <div className="flex flex-row w-1/3 smphone:w-5/6 phone:w-2/3 tablet:w-1/2 laptop:w-5/12 desktop:w-1/3 mx-auto justify-center">
        <Image src={projectGallery} alt="projects in neon sign script" />
      </div>
      {/* PROJECT CARD CONTAINER */}
      <div className="flex flex-wrap w-9/12 mx-auto mt-0 mb-4 gap-2 justify-center">
        {projData.map((proj) => (
          <div key={proj.id} className="w-80 relative m-2">
            <Link href={`/portfolio/${proj.slug}`}>
              <PosterCard
                img={`/images${proj.image}`}
                alt={proj.alt}
                slug={proj.slug}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
