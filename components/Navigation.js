import React, { useState } from "react";
import { IoLogoVercel } from "react-icons/io";

const Navigation = () => {
  // state
  const [navBar, setNavBar] = useState(false);

  // handleNavBar
  const handleNavBar = () => {
    setNavBar(!navBar);
  };
  console.log(navBar);
  const style = {
    nav: "border-2 bg-slate-50",
    navContainer: "flex justify-between",
    bar: "w-[25px] h-[2px] rounded-full bg-zinc-800",
  };
  return (
    <nav className=" bg-theme shadow fixed w-full bg-white/20 backdrop-blur h-[60px] flex items-center ">
      <div className="flex justify-between items-center w-[90%] m-auto ">
        <div className="logo-container ">
          <p className="font-black bg-blue-700 text-white text-2xl px-4 text-theme rounded">
            Pat
          </p>
        </div>
        <div className="nav-links desktop hidden">
          <ul>
            <li>Home</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="nav-bar mobile space-y-[4px] " onClick={handleNavBar}>
          <div className={style.bar}></div>
          <div className={style.bar}></div>
          <div className={`${style.bar} w-[15px] ml-[10px]`}></div>
        </div>
      </div>
      <div
        className={`absolute w-[70%] grid place-items-center bg-blue-700 h-screen top-0 transition-all ${
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
