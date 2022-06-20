import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Floating = () => {
  // style
  const style = {
    iconContainer:
      "p-3 rounded-full transition-all bg-white-600 cursor-pointer text-pink-600 hover:text-white bg-white hover:bg-pink-600 ",
    icon: "  ",
  };
  return (
    <div className=" hidden xl:block xl:fixed xl:top-[40%] xl:left-[5%] xl:translate-x-[-5%] space-y-4 ">
      <div className={style.iconContainer}>
        <Link href="https://www.facebook.com/johnpatrick13/">
          <a target="_blank" className={style.icon}>
            <FaFacebookF />
          </a>
        </Link>
      </div>
      <div className={style.iconContainer}>
        <Link href="https://www.linkedin.com/in/john-patrick-resurreccion-5b5314213/">
          <a target="_blank" className={style.icon}>
            <FaLinkedinIn />
          </a>
        </Link>
      </div>
      <div className={style.iconContainer}>
        <Link href="https://github.com/patjohntrick">
          <a target="_blank" className={style.icon}>
            <FaGithub />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Floating;
