"use client";

import Image from "next/image";
import React from "react";
import TypewriterComponent from "typewriter-effect";

const HomeComponent = () => {
  return (
    <div
      id="home"
      className=" p-10 md:py-20 flex justify-between items-center h-[100vh] md:h-full relative"
    >
      <div className="relative z-50 ">
        <h1 className="text-6xl mb-10 uppercase font-bold">
          George
          Sackey-Robertson
        </h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl font-bold">
          <TypewriterComponent
            options={{
              strings: [
                "UI / UX DESIGNER.",
                "GRAPHIC DESIGNER.",
                "ILLUSTRATOR",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className=" block md:hidden absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-[#0000007e] z-20"></div>
      <div className=" w-full h-full p-10 py-36 z-10 md:relative md:w-[700px] md:h-[600px]">
        <Image
          fill
          src={"/assets/george.png"}
          alt="profile"
          className="object-contain object-center"
        />
      </div>
    </div>
  );
};

export default HomeComponent;
