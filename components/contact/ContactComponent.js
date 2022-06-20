import React from "react";
import Divider from "../../components/Divider";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const contact = () => {
  // style
  const style = {
    label: "font-medium text-lg ",
    input:
      "px-2 py-3 text-black/90 border-[1px] border-black/90 hover:border-indigo-800 focus:border-indigo-800 transition-all rounded outline-none w-full mt-1 ",
    form: "space-y-3",
    span: "text-indigo-800 font-medium",
    btn: "px-7 py-3 rounded text-white font-medium text-sm uppercase bg-indigo-700 hover:bg-indigo-800 transition-all outline-none cursor-pointer shadow-lg ",
    btnContainer: "grid place-items-center mb-6",
    otherContact: "flex gap-2 items-center text-indigo-700",
    contactDetails: "text-black/90",
  };
  return (
    <div className="container pt-12 w-[90%] m-auto md:w-[70%] lg:w-[800px] xl:w-[950px] ">
      <header className="text-center space-y-2 mb-8">
        <p className=" text-indigo-700 capitalize font-semibold text-lg ">
          contact
        </p>
        <div className=" grid place-items-center ">
          <Divider />
        </div>
        <p className=" text-2xl font-semibold text-black/90 underline decoration-2 underline-offset-2 decoration-pink-500 ">
          Need to talk?
        </p>
      </header>
      <div className="form-container max-w-[350px] m-auto lg:flex lg:gap-2 lg:items-center lg:max-w-[800px] ">
        <div className="img-container hidden lg:block lg:w-[50%]">
          <img
            src="/contact/contact.svg"
            alt=""
            className="w-full object-cover"
          />
        </div>
        <form action="" className={style.form}>
          <div>
            <label htmlFor="name" className={style.label}>
              Name <span className={style.span}>*</span>
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              className={style.input}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className={style.label}>
              Email <span className={style.span}>*</span>
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              className={style.input}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className={style.label}>
              Message <span className={style.span}>*</span>
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className={style.input}
              required
            ></textarea>
          </div>
          <div className={style.btnContainer}>
            <button type="submit" className={style.btn}>
              Send
            </button>
          </div>
          <div>
            <div className={style.otherContact}>
              <BsFillTelephoneFill />
              <p className={style.contactDetails}>(+63) 956 6723 445</p>
            </div>
            <div className={style.otherContact}>
              <MdEmail />
              <p className={style.contactDetails}>
                patrickjohn.resurreccion<span>18@gmail.com</span>{" "}
              </p>
            </div>
            <div className={style.otherContact}>
              <ImLocation />
              <p className={style.contactDetails}>
                Catanauan, Quezon. Philippines, 4311
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default contact;
