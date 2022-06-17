import React from "react";
import {
  BsTelephoneFill,
  BsGithub,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  // style
  const style = {
    icon: "text-xl",
  };
  return (
    <footer className=" bg-black text-white ">
      <div className="conatiner py-10 w-[90%] m-auto">
        <div>
          <p className=" text-blue-700 text-2xl font-semibold mb-2 ">
            John Patrick Resurreccion
          </p>
          <p className="text-white/90 mb-2 font-light text-justify">
            {`Don't hesitate to ask something. I am also open to share my skills
            and knowledge and other opportunities that may enhance my
            development skills and help others in return.`}
          </p>
          <div>
            <div className="flex gap-2 items-center text-blue-700">
              <BsTelephoneFill />
              <p className="text-white/90 font-light ">{`(+63) 956 6723 445`}</p>
            </div>
            <div className="flex gap-2 items-center text-blue-700 break-words ">
              <MdEmail />
              <p className="text-white/90 font-light break-words ">
                patrickjohn.resurreccion <span className="hidden"></span>{" "}
                18@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="mb-2 text-sm">Made by John Patrick Resurreccion</p>
          <div className="flex justify-center gap-4">
            <div className={style.icon}>
              <BsFacebook />
            </div>
            <div className={style.icon}>
              <BsLinkedin />
            </div>
            <div className={style.icon}>
              <BsGithub />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
