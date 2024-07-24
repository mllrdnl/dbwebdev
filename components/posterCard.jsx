import React from "react";
import Image from "next/image";

const posterCard = ({ title, img, alt, slug }) => {
  return (
    <div className="max-w-80 h-auto hover:scale-110 transition duration-150 ease-in-out m-4">
      <Image
        src={img}
        alt={alt}
        width={320}
        height={384}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default posterCard;
