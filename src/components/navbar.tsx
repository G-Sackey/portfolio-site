"use client";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  motion,
} from "framer-motion";
import Link from "next/link";
import { title } from "process";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Sidebar from "./sidebar";

const NavLinks = [
  {
    title: "Home",
    url: "#home",
  },
  {
    title: "Projects and Tools",
    url: "#projects",
  },
  {
    title: "About",
    url: "#about",
  },
  // {
  //   title: "Featured Projects",
  //   url: "#featured-projects",
  // },
  // {
  //   title: "Contact Me",
  //   url: "#contact",
  // },
];

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  const [isActive, setIsActive] = useState(false);

  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    setShowFeatures(false)
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (isActive) {
        setVisible(true);
      } else {
        if (scrollYProgress.get() < 0.055) {
          setVisible(true);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      }
    }
  });
  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className={`
            flex flex-col items-center fixed top-0 mx-auto w-full  z-[2147483005]
            ${
              isActive ? "bg-transparent " : "bg-[#020617]/70 backdrop-blur-md"
            }`}
        >
          <div className="hidden p-7 md:flex items-center justify-center gap-10">
            {NavLinks.map((item) => {
              return (
                <Link href={item?.url} key={item?.url}>
                  {item?.title}
                </Link>
              );
            })}

            <div className="relative">
              <div className="flex items-center gap-2">
                <Link href="#featured-projects" className="relative">
                  Featured Projects
                </Link>
                {showFeatures ? (
                  <RiArrowDropUpLine
                    size={25}
                    onClick={() => setShowFeatures((prev) => !prev)}
                    className="cursor-pointer"
                  />
                ) : (
                  <RiArrowDropDownLine
                    size={25}
                    onClick={() => setShowFeatures((prev) => !prev)}
                    className="cursor-pointer"
                  />
                )}
              </div>
              {showFeatures && (
                <div
                  className={`flex flex-col gap-5 absolute p-5 w-[200px] ${
                    isActive
                      ? "bg-transparent "
                      : "bg-[#020617]/70 backdrop-blur-md"
                  }`}
                >
                  <Link href="#uiux">UI / UX </Link>
                  <Link href="#graphic-design">Graphic Design </Link>
                  <Link href="#illustrations">Illustrations </Link>
                </div>
              )}
            </div>
            <Link href="#collaborators">Collaborators</Link>
            <Link href="#contact">Contact Me</Link>
          </div>
          <div className="md:hidden p-7 flex justify-between items-center w-full">
            <h1>geograhix</h1>
            {/* <button>burger</button> */}
            <Sidebar />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
