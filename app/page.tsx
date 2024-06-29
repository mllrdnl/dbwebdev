import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* IMAGE CONTAINER */}
      <div className=" w-full flex flex-row justify-center">
        <Image
          src="/signlogonobg.png"
          alt="dbwebdev neon light turned off"
          width={1000}
          height={800}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
