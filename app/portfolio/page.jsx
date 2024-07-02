import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjCard from "../../components/ProjCard";
import projData from "../../data.json";

const PortfolioPage = () => {
  return (
    <div className="h-full w-full flex flex-col mt-12 mb-6">
      {/* PROJECT CARD CONTAINER */}
      <div className="flex flex-wrap gap-8 mx-48 mb-12">
        {projData.map((proj) => (
          <div key={proj.id}>
            <ProjCard
              title={proj.title}
              img={`/images${proj.image}`}
              desc={proj.description}
              tags={proj.tags}
              alt={proj.alt}
              slug={proj.slug}
              tech={proj.tech}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
