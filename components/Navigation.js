import React, { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  // state
  const [navBar, setNavBar] = useState(false);

  // handleNavBar
  const handleNavBar = () => {
    setNavBar(!navBar);
  };
  // console.log(navBar);
  const style = {
    nav: "border-2 bg-slate-50",
    navContainer: "flex justify-between",
    bar: "w-[25px] h-[2px] rounded-full bg-indigo-800",
  };
  return (
    <nav className=" shadow fixed w-full bg-white/80 backdrop-blur h-[70px] flex items-center z-20 ">
      <div className="flex justify-between items-center w-[90%] m-auto md:w-[80%] lg:w-[800px] xl:w-[1100px]">
        <div className="logo-container ">
          <Link href="/">
            <a className="font-black bg-indigo-700 text-white text-2xl px-4 text-theme rounded">
              Pat
            </a>
          </Link>
        </div>
        <div className="nav-links desktop hidden md:block">
          <ul className="flex gap-6 text-indigo-700 font-medium">
            <li className="underline underline-offset-4 decoration-pink-500 decoration-2">
              Home
            </li>
            <li>Contact</li>
          </ul>
        </div>
        <div
          className="nav-bar mobile space-y-[4px] md:hidden "
          onClick={handleNavBar}
        >
          <div className={style.bar}></div>
          <div className={style.bar}></div>
          <div className={`${style.bar} w-[15px] ml-[10px]`}></div>
        </div>
      </div>
      <div
        className={`absolute w-[70%] grid place-items-center bg-indigo-700 h-screen top-0 transition-all md:hidden ${
          navBar ? "left-[30%]" : "left-[100%]"
        }`}
      >
        <div
          className="flex rotate-45 w-[25px] h-[25px] absolute top-[3%] left-[80%]"
          onClick={handleNavBar}
        >
          <div className="w-[2px] h-[25px] rounded-full bg-zinc-800 left-[50%] translate-x-[-50%] absolute bg-white/90"></div>
          <div className="w-[2px] h-[25px] rounded-full bg-zinc-800 rotate-90 top-0 left-[50%] translate-x-[-50%] absolute bg-white/90"></div>
        </div>
        <ul className="text-center text-white/90 space-y-4">
          <li>Home</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
