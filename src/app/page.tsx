import About from "@/components/about";
import Collaborators from "@/components/collaborators";
import FeaturedProjects from "@/components/featured-projects";
import Footer from "@/components/footer";
import HomeComponent from "@/components/home";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HomeComponent />
      <Projects />
      <About />
      <FeaturedProjects />
      <Collaborators />
      <Footer />
    </div>
  );
}
