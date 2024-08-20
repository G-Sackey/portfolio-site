import About from "@/components/about";
import Contact from "@/components/contact";
import FeaturedProjects from "@/components/featured-projects";
import Footer from "@/components/footer";
import HomeComponent from "@/components/home";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* <Sidebar /> */}
      <HomeComponent />
      <Projects />
      <About />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}
