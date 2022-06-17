import React from "react";
import Divider from "../Divider";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const Profile = () => {
  // style
  const style = {
    skillIcon: "text-black/90 transition-all hover:text-blue-700 text-5xl ",
  };
  return (
    <section>
      <div className="container py-10 w-[90%] m-auto">
        <header className="text-center space-y-2">
          <p className=" text-blue-700 capitalize font-semibold text-lg ">
            profile
          </p>
          <div className=" grid place-items-center ">
            <Divider />
          </div>
          <p className=" capitalize text-2xl font-semibold text-black/90 ">
            personal info
          </p>
        </header>
        <div className="text-container mt-8 space-y-1">
          <header className=" text-blue-700 font-medium text-lg">
            Get to know me
          </header>
          <div className=" space-y-2 ">
            <div className="text-container mb-4">
              <p className=" text-black/90 text-justify ">
                My name{" "}
                <span className=" text-black/80 font-semibold">
                  John Patrick Resurreccion
                </span>
                . I am an aspiring Front End Web Developer that enjoys
                developing web-based solutions. I am a college student under
                Bachelor of Science in Information Technology (BSIT) course. I
                made the decision to pursue Web Development and have been
                associated with it. Although I am still at the beginning of my
                Web Development career, I am constantly learning and exploring
                different kinds of web technologies. <br /> When I&apos;m not
                writing code and learning new technologies, I prefer to play
                online games. I also sing and play guitar🎶🎸.
              </p>
            </div>
            <div className="img-container relative hidden">
              <div className="border-2 h-full absolute"></div>
              <img src="pic.jpg" alt="" className=" grayscale " />
            </div>
          </div>
          <div className="tech-stack space-y-1">
            <header className=" text-2xl font-semibold mb-4 mt-8 text-center ">
              Tech stack
            </header>
            <div className="icon-container flex justify-center gap-5 ">
              <div className={style.skillIcon}>
                <SiMongodb />
              </div>
              <div className={style.skillIcon}>
                <SiExpress />
              </div>
              <div className={style.skillIcon}>
                <SiReact />
              </div>
              <div className={style.skillIcon}>
                <SiNodedotjs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
