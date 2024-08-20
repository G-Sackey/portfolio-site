"use client";
import Image from "next/image";
import { GraphicDes, Illustrations, UI } from "../../constants";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex justify-center gap-10 my-10 flex-wrap px-10"
    >
      <div className="mb-10 flex-1">
        <h2 className="text-3xl text-center md:text-left mb-3 md:mb-10">
          Projects
        </h2>
        <div className="flex gap-5 md:gap-10 justify-center items-center flex-wrap md:h-full">
          <div className="bg-gradient-to-r from-[#0383BD] to-[#020F16] text-white rounded-3xl align-middle flex flex-col p-5 items-center justify-center w-full h-[150px] md:h-[250px] md:w-[250px]">
            <h2 className="mb-auto">GRAPHIC DESIGNS</h2>
            <div className="flex justify-center items-center text-5xl flex-1">
              <p>{GraphicDes.length}</p>
              <p className="font-thin">+</p>
            </div>
          </div>
          <div className=" bg-gradient-to-r from-[#7C4DFF] to-[#0c0324] text-white rounded-3xl align-middle flex flex-col p-5 items-center justify-center w-full h-[150px] md:h-[250px] md:w-[250px]">
            <h2 className="mb-auto">UI / UX DESIGNS</h2>
            <div className="flex justify-center items-center text-5xl flex-1">
              <p>{UI.length}</p>
              <p className="font-thin">+</p>
            </div>
          </div>
          <div className=" bg-gradient-to-r from-[#FF5722] to-[#1C0802] text-white rounded-3xl align-middle flex flex-col p-5 items-center justify-center w-full h-[150px] md:h-[250px] md:w-[250px]">
            <h2 className="mb-auto">ILLUSTRATORS</h2>
            <div className="flex justify-center items-center text-5xl flex-1">
              <p>{Illustrations.length}</p>
              <p className="font-thin">+</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-auto">
        <h2 className="text-3xl text-center md:text-left mb-3 md:mb-10">
          Tools
        </h2>
        <div className="flex gap-10 relative w-full md:h-full items-center justify-center">
          <div className="w-[50px] md:w-[100px] h-[50px] md:h-[100px] relative">
            <Image
              src={"/assets/photoshop.svg"}
              alt="photoshop"
              fill
              className="objet-cover object-center"
            />
          </div>
          <div className="w-[50px] md:w-[100px] h-[50px] md:h-[100px] relative">
            <Image
              src={"/assets/figma.svg"}
              alt="photoshop"
              fill
              className="objet-cover object-center"
            />
          </div>
          <div className="w-[50px] md:w-[100px] h-[50px] md:h-[100px] relative">
            <Image
              src={"/assets/illustrator.svg"}
              alt="photoshop"
              fill
              className="objet-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
