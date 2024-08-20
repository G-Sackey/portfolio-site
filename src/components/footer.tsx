import React from "react";
import Contact from "./contact";
import Image from "next/image";

const Footer = () => {
  return (
      <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start md:justify-between gap-10 p-10 border-t-2 border-[#272727] text-center md:text-left">
        <div>
          <div className="flex items-center gap-5">
            <div className="w-[100px] h-[100px] relative">
              <Image
                fill
                src={"/assets/logo_geografix.png"}
                alt="logo"
                className="object-center object-cover"
              />
            </div>
            <h2 className="text-3xl">GEOGRAFIX</h2>
          </div>
        </div>
        <div>
          <h2 className="text-3xl mb-5">Service</h2>
          <div className="flex flex-col gap-5">
            <p>Web Design</p>
            <p>Mobile App Design</p>
            <p>Graphic Design</p>
            <p>Illustrations</p>
            <p>Branding</p>
            <p>Project Management</p>
          </div>
        </div>
        <Contact />
      </div>
  );
};

export default Footer;
