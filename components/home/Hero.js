import React from "react";

const Hero = () => {
  // style
  const style = {
    btn: "border-2 px-5 text-sm py-2 rounded font-medium transition-all cursor-pointer uppercase",
  };
  return (
    <section className=" pt-[60px] h-[80vh] grid place-items-center bg-slate-50">
      <div className="container">
        <div className="text-container text-center space-y-1">
          <p className=" text-black/90 font-medium text-sm ">
            Hey there👋, I am
          </p>
          <p className=" font-bold text-4xl text-blue-700 ">
            John Patrick Resurreccion
          </p>
          <p className=" text-lg font-medium text-black/90 ">
            Aspiring{" "}
            <span className=" border-b-[1px] border-blue-800 ">
              Front-End Developer
            </span>
          </p>
        </div>
        <div className="btn-container flex gap-2 justify-center mt-4">
          <p
            className={`${style.btn} border-blue-800 bg-blue-800 text-white shadow hover:shadow-lg hover:bg-blue-900`}
          >
            Contact
          </p>
          <p
            className={`${style.btn} border-blue-800 text-blue-800 hover:bg-blue-100`}
          >
            Resume
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
