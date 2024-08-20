"use client";
import Image from "next/image";
import React, { useState } from "react";

const About = () => {
  const [showExperience, setShowExperience] = useState(false);
  const [showSkills, setShowSkills] = useState(true);
  const [showEducation, setShowEducation] = useState(false);

  const handleSkills = () => {
    setShowSkills(true);
    setShowEducation(false);
    setShowExperience(false);
  };
  const handleExperience = () => {
    setShowSkills(false);
    setShowEducation(false);
    setShowExperience(true);
  };
  const handleEducation = () => {
    setShowSkills(false);
    setShowEducation(true);
    setShowExperience(false);
  };

  return (
    <div id="about" className="flex justify-between gap-10 p-10">
      <div className="relative w-[100%] h-[24rem] hidden md:block">
        <Image
          src={"/assets/about.jpg"}
          fill
          alt="about"
          className="object-contain object-center"
        />
      </div>
      <div>
        <h2 className="text-3xl text-[#d13643]">About Me</h2>

        <p className="font-thin">
          I am a dedicated graphic designer with a passion for transforming
          ideas into visually compelling designs. Over the past 5 years as a
          freelance designer, I&apos;ve honed my skills in creating unique and
          impactful visuals for a diverse range of clients. My approach to
          design is rooted in a strong understanding of both aesthetic
          principles and effective communication, aiming to deliver designs that
          not only look great but also tell a story.
        </p>
        <div className="">
          <div className="flex gap-5 items-center mt-5">
            <button
              className={`${showSkills && "border-b-2 border-b-[#d13643]"}`}
              onClick={handleSkills}
            >
              Skills
            </button>
            <button
              className={`${showExperience && "border-b-2 border-b-[#d13643]"}`}
              onClick={handleExperience}
            >
              Experience
            </button>
            <button
              className={`${showEducation && "border-b-2 border-b-[#d13643]"}`}
              onClick={handleEducation}
            >
              Education
            </button>
          </div>
          <div className="mt-5 flex flex-col gap-5 h-[300px] overflow-auto">
            {showSkills && (
              <>
                <div className="">
                  <p className="text-[#d13643]">Design Software</p>
                  <p>
                    Proficient in Adobe Creative Suite (Photoshop, Illustrator,
                    InDesign) and Figma
                  </p>
                </div>
                <div className="">
                  <p className="text-[#d13643]">Branding</p>
                  <p>
                    Specialized in developing distinct brand identities, logos,
                    and marketing collateral tailored to client needs.
                  </p>
                </div>
                <div className="">
                  <p className="text-[#d13643]">Web Design</p>
                  <p>
                    Experienced in crafting user-centric website designs that
                    are both functional and aesthetically pleasing.
                  </p>
                </div>
                <div className="">
                  <p className="text-[#d13643]">Illustrations</p>
                  <p>
                    Skilled in both traditional and digital illustration,
                    bringing a unique touch to various projects.
                  </p>
                </div>
                <div className="">
                  <p className="text-[#d13643]">Design Principles</p>
                  <p>
                    Strong understanding of the fundamentals of design,
                    enhancing the visual impact of designs.
                  </p>
                </div>
                <div className="">
                  <p className="text-[#d13643]">Client Collaboration</p>
                  <p>
                    Adept at understanding client requirements and translating
                    them into effective design solutions.
                  </p>
                </div>
                <div className="">
                  <p className="text-[#d13643]">Project Management</p>
                  <p>
                    Ability to manage multiple projects simultaneously while
                    meeting tight deadlines.
                  </p>
                </div>
              </>
            )}
            {showExperience && (
              <>
                <div className="">
                  <p className="text-[#d13643]">
                    Freelance Graphic Designer, Geographix, 4+ years
                  </p>
                  <p>
                    Over the course of my freelance career, I have worked with a
                    variety of clients, from startups to established businesses,
                    delivering tailored design solutions that meet their
                    specific needs. My portfolio includes branding projects,
                    website designs, marketing materials, and custom
                    illustrations, all aimed at helping clients achieve their
                    visual communication goals.{" "}
                  </p>
                </div>
              </>
            )}

            {showEducation && (
              <>
                <div className="">
                  <p className="text-[#d13643]">
                    Bachelor of Science (Computer Science)
                  </p>
                  <p>
                    Kwame Nkrumah University of Science and Technology
                    (2021-2024)
                  </p>
                </div>
                <div className="">
                  <p className="text-[#d13643]">Google ads Display</p>
                  <p>Google Skill Shop (2023-2024)</p>
                </div>
                <div className="">
                  <p className="text-[#d13643]">
                    West Africa Senior School Certificate Examination (General
                    Science)
                  </p>
                  <p>Opoku Ware Senior High School (2017-2020)</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
