import React from 'react';
import {
  BsTelephoneFill,
  BsGithub,
  BsLinkedin,
  BsFacebook,
} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

const Footer = () => {
  // style
  const style = {
    icon: 'text-xl lg:text-2xl cursor-pointer  ',
    icons: 'text-indigo-700 transition-all ',
  };
  return (
    <footer className=' bg-white '>
      <div className='conatiner py-10 w-[90%] m-auto md:w-[80%] lg:w-[800px] xl:w-[1100px] lg:flex lg:justify-between'>
        <div className=' lg:w-[50%] '>
          <p className=' text-indigo-700 text-2xl font-semibold mb-2 '>
            John Patrick Resurreccion
          </p>
          <p className='text-black/90 mb-2 text-justify lg:text-left leading-normal '>
            {`Don't hesitate to ask something. I am also open to share my skills
            and knowledge and other opportunities that may enhance my
            development skills and help others in return.`}
          </p>
          <div className=' space-y-1 mt-3 '>
            <div className='flex gap-2 items-center text-indigo-700 t'>
              <BsTelephoneFill />
              <p className='text-black/90 text-sm   '>{`(+63) 956 6723 445`}</p>
            </div>
            <div className='flex gap-2 items-center text-indigo-700 break-words '>
              <MdEmail />
              <p className='text-black/90 text-sm  break-words '>
                patrickjohn.resurreccion18@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className='mt-6 text-center lg:mt-0 '>
          <p className='mb-4 font-medium text-black/90 text-sm'>
            Made by John Patrick Resurreccion
          </p>
          <div className='flex justify-center gap-4 '>
            <div className={style.icon}>
              <Link href='https://www.facebook.com/johnpatrick13/'>
                <a target='_blank' className={style.icons}>
                  <BsFacebook />
                </a>
              </Link>
            </div>
            <div className={style.icon}>
              <Link href='https://www.linkedin.com/in/john-patrick-resurreccion-5b5314213/'>
                <a target='_blank' className={style.icons}>
                  <BsLinkedin />
                </a>
              </Link>
            </div>
            <div className={style.icon}>
              <Link href='https://github.com/patjohntrick'>
                <a target='_blank' className={style.icons}>
                  <BsGithub />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
