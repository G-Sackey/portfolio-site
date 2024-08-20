"use client"

import Image from "next/image";
import React from "react";
import TypewriterComponent from "typewriter-effect";

const HomeComponent = () => {
  return (
    <div id="home" className="p-10 flex justify-between items-center h-[80vh] md:h-full relative">
      <div className="relative z-50">
        <h1 className="text-6xl mb-10">George <br/>Sackey-Robertson</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl font-bold">
          <TypewriterComponent
            options={{
              strings: [
                "UI / UX DESIGNER.",
                "GRAPHIC DESIGNER.",
                "ILLUSTRATOR"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

      </div>
      <div className=" block absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-[#0000007e] z-20"></div>
      <div className=" w-full h-full z-10 md:relative md:w-[700px] md:h-[600px]">
        <Image fill src={"/assets/profile.png"} alt="profile" className="object-cover object-center"/>
      </div>
    </div>
  );
};

export default HomeComponent;
