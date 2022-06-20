import Floating from "../components/Floating";
import Hero from "../components/home/Hero";
import Profile from "../components/home/Profile";
import Project from "../components/home/Project";

export default function Home() {
  return (
    <div className=" bg-theme ">
      {/* <Floating /> */}
      <Hero />
      <Profile />
      <Project />
    </div>
  );
}
