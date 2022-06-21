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
    <nav className=" fixed w-full bg-white/80 backdrop-blur h-[70px] flex items-center z-20 ">
      <div className="flex justify-between items-center w-[90%] m-auto md:w-[80%] lg:w-[800px] xl:w-[1100px]">
        <div className="logo-container ">
          <Link href="/">
            <a className="font-black text-indigo-700 text-4xl text-theme rounded">
              PAT.
            </a>
          </Link>
        </div>
        <div className="nav-links desktop hidden md:block">
          <ul className="flex gap-6 text-indigo-700 font-medium">
            <Link href="/">
              <a className="underline underline-offset-4 decoration-pink-500 decoration-2">
                Home
              </a>
            </Link>
            <Link href="/contact">
              <a className="underline underline-offset-4 decoration-pink-500 decoration-2">
                Contact
              </a>
            </Link>
          </ul>
        </div>
        <div
          className="nav-bar mobile space-y-[4px] md:hidden cursor-pointer "
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
          className="flex rotate-45 w-[25px] h-[25px] absolute top-[4%] left-[80%] translate-y-[-4%] cursor-pointer"
          onClick={handleNavBar}
        >
          <div className="w-[2px] h-[25px] rounded-full bg-zinc-800 left-[50%] translate-x-[-50%] absolute bg-white/90"></div>
          <div className="w-[2px] h-[25px] rounded-full bg-zinc-800 rotate-90 top-0 left-[50%] translate-x-[-50%] absolute bg-white/90"></div>
        </div>
        <ul
          className="text-center text-white/90 space-y-4"
          onClick={handleNavBar}
        >
          <Link href="/">
            <a className="underline underline-offset-4 decoration-pink-500 decoration-2">
              Home
            </a>
          </Link>{" "}
          <br /> <br />
          <Link href="/contact">
            <a className="underline underline-offset-4 decoration-pink-500 decoration-2">
              Contact
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
