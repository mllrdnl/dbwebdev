import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-3/4 h-full flex flex-row">
        {/* IMAGE CONTAINER */}
        <div className="relative w-2/3 h-full">
          {/* <Image
            src="/signlogo_on_lg5.png"
            alt="dbwebdev neon light turned off"
            layout="fill"
            style={{ objectFit: "contain" }}
          /> */}
          <Image
            src="/signlogo_off_lg.png"
            alt="dbwebdev neon light turned off"
            layout="fill"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
