import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { FaBurger } from "react-icons/fa6";

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

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <FaBurger size={25} />
        </button>
      </SheetTrigger>
      <SheetContent className="z-[214748300512] text-black">
        <SheetHeader>
          <div className="flex flex-col gap-5">
            {NavLinks.map((item) => {
              return (
                <Link href={item?.url} key={item?.url}>
                  {item?.title}
                </Link>
              );
            })}
            <div className="relative">
              <div className="flex flex-col justify-center gap-2">
                <Link href="#featured-projects" className="relative">
                  Featured Projects
                </Link>
                <div className="flex flex-col gap-5 ml-5 text-sm">
                  <Link className="flex items-center" href="#uiux">
                    - UI / UX{" "}
                  </Link>
                  <Link className="flex items-center" href="#graphic-design">
                    - Graphic Design{" "}
                  </Link>
                  <Link className="flex items-center" href="#illustrations">
                    - Illustrations{" "}
                  </Link>
                </div>
                {/* {showFeatures ? (
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
                )} */}
              </div>
              {/* {showFeatures && (
                <div
                  className={`flex flex-col gap-5 absolute p-5 w-[200px] ${
                    isActive
                      ? "bg-transparent "
                      : "bg-[#fff]/70 backdrop-blur-md border rounded"
                  }`}
                >
                  <Link href="#uiux">UI / UX </Link>
                  <Link href="#graphic-design">Graphic Design </Link>
                  <Link href="#illustrations">Illustrations </Link>
                </div>
              )} */}
            </div>
            <Link href="#collaborators">Collaborators</Link>
            <Link href="#contact">Contact Me</Link>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
