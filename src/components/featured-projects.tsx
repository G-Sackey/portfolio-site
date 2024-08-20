"use client";
import Image from "next/image";
import { UI } from "../../constants";
import UIUXDesign from "./uiux-design";
import GraphicDesignComponent from "./graphic-design";
import IllustrationsComponent from "./illustrations";

const FeaturedProjects = () => {
  return (
    <section>
      <div id="featured-projects" className="p-10">
        <h2 className="text-3xl">Featured Projects</h2>
        <UIUXDesign />
        <GraphicDesignComponent />
        <IllustrationsComponent />
      </div>
    </section>
  );
};

export default FeaturedProjects;
