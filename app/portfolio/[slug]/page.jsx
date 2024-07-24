import projects from "../../../data.json";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import Navbar from "@/components/Navbar";

export default function Project({ params }) {
  const selectedProject = projects.filter((proj) => {
    return proj.slug === params.slug;
  });

  return (
    <div className="h-full w-full flex flex-col mb-6">
      <div className="m-4">
        <Navbar />
      </div>

      {selectedProject.map((projDetails, i) => (
        <div
          key={i}
          className="flex flex-col w-10/12 phone:w-5/6 tablet:w-3/4 laptop:w-2/3 h-10/12 mx-auto mt-2"
        >
          <div className="flex flex-row gap-2 font-extrabold text-5xl justify-center smphone:flex-col tablet:flex-row laptop:flex-row desktop:flex-row">
            {/* PROJECT TITLE */}
            <h1 className="font-rollerScript text-5xl text-[#78EFC0]">
              project:
            </h1>
            <h2 className="uppercase text-wrap break-words hyphens-auto">
              {projDetails.title}
            </h2>
          </div>
          <div className="w-full h-full flex flex-col">
            {/* PROJECT DETAILS */}
            <div className="relative w-72 h-72 mx-auto my-4 tablet:w-80 tablet:h-96 ">
              {/* PROJECT PIC */}
              <Image
                src={`/images${projDetails.image}`}
                alt={projDetails.alt}
                layout="fill"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-rollerScript text-3xl mx-auto text-[#e38fe5]">
                {projDetails.wip === true ? <h3>work in progress</h3> : null}
              </div>
              {/* PROJECT INFO */}
              <div className="">
                <h3 className="uppercase font-bold  smphone:text-2xl phone:text-2xl tablet:text-3xl text-[#78EFC0]">
                  description:
                </h3>
                <p className="mt-2 mb-2 smphone:text-xl phone:text-xl tablet:text-2xl">
                  {projDetails.description}
                </p>
              </div>
              <div>
                <h3 className="uppercase font-bold smphone:text-2xl tablet:text-3xl text-[#78EFC0]">
                  Additional Info:
                </h3>
                <p className="mt-2 mb-2 text-2xl smphone:text-xl phone:text-xl tablet:text-2xl">
                  {projDetails.info}
                </p>
              </div>
              <div className="uppercase font-bold smphone:text-2xl phone:text-2xl tablet:text-3xl text-[#78EFC0]">
                <h3 className="mb-2">Tech Used:</h3>
                <div className="flex flex-row gap-2">
                  {/* TECH INFO */}
                  {projDetails.tech?.map((each, i) => (
                    <div key={i} className="relative ">
                      <Image
                        src={`/images${each.logo_url}`}
                        alt="tech logo"
                        width={50}
                        height={50}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-16 gap-12 mb-8">
              {/* PROJECT BUTTONS */}
              <a href={projDetails.proj_url} target="_blank">
                <div className="flex justify-center items-center gap-2 border p-2 rounded-lg">
                  <HiExternalLink size={36} />
                  <p>Project</p>
                </div>
              </a>
              <a href={projDetails.git_url} target="_blank">
                <div className="flex justify-center items-center gap-2 border p-2 rounded-lg">
                  <BsGithub size={36} />
                  <p>Code</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
