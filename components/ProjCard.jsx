import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjCard = ({ title, img, desc, tags, tech, alt, slug }) => {
  return (
    <div className="flex flex-col w-80 h-96 border-2 border-slate-700 rounded-md hover:shadow-all hover:text-[#78efc0] hover:scale-110 transition duration-150 ease-in-out">
      <Link
        href={`/portfolio/${slug}`}
        className="h-full w-full flex flex-col justify-between"
      >
        <div className="flex justify-center text-2xl font-extrabold p-2">
          {/* CARD TITLE */}
          <h4 className="align-baseline">{title}</h4>
        </div>
        <div className="relative w-full h-full">
          {/* IMAGE CONTAINER */}
          <Image
            src={img}
            alt={alt}
            layout="fill"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          {/* TECH LIST */}
          <ul className="flex flex-row p-2 gap-2">
            {tech?.map((each, i) => (
              <li className="relative pt-2" key={i}>
                <Image
                  src={`/images${each.logo_url}`}
                  alt="alt"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default ProjCard;
