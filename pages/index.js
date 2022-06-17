import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Profile from "../components/home/Profile";
import Project from "../components/home/Project";

export default function Home() {
  return (
    <div className=" bg-theme ">
      <Hero />
      <Profile />
      <Project />
      <Footer />
    </div>
  );
}
