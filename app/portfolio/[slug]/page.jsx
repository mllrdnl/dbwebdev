import projects from "../../../data.json";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

export default function Project({ params }) {
  const selectedProject = projects.filter((proj) => {
    return proj.slug === params.slug;
  });

  return (
    <div className="h-full w-full flex justify-center mt-12 mb-6">
      {selectedProject.map((projDetails, i) => (
        <div key={i} className="flex flex-col w-10/12 h-10/12">
          <div className="flex flex-row gap-2 font-extrabold text-4xl justify-center">
            {/* PROJECT TITLE */}
            <h1>Project:</h1>
            <h2>{projDetails.title}</h2>
            {projDetails.wip === true ? <h3>Work in Progress</h3> : null}
          </div>
          <div className="w-full h-full flex flex-col">
            {/* PROJECT DETAILS */}
            <div className="relative w-72 h-72 mx-auto">
              {/* PROJECT PIC */}
              <Image
                src={`/images${projDetails.image}`}
                alt={projDetails.alt}
                layout="fill"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="flex flex-col gap-4">
              {/* PROJECT INFO */}
              <div className="">
                <h3 className="font-bold text-xl text-[#78EFC0]">
                  Description:
                </h3>
                <p className="mt-2">{projDetails.description}</p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#78EFC0]">
                  Additional Info:
                </h3>
                <p className="mt-2">{projDetails.info}</p>
              </div>
              <div className="font-bold text-xl text-[#78EFC0]">
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
