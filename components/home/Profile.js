import React from 'react';
import Divider from '../Divider';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const Profile = () => {
  // style
  const style = {
    skillIcon: 'text-black/90 transition-all hover:text-indigo-700 text-5xl ',
  };
  return (
    <section>
      <div className='container py-12 w-[90%] m-auto md:w-[70%] lg:w-[800px] xl:w-[950px] '>
        <header className='text-center space-y-2'>
          <p className=' text-indigo-700 capitalize font-semibold text-lg '>
            profile
          </p>
          <div className=' grid place-items-center '>
            <Divider />
          </div>
          <p className=' capitalize text-2xl font-semibold text-black/90 underline decoration-2 underline-offset-2 decoration-pink-500 '>
            personal info
          </p>
        </header>
        <div className='text-container mt-8 space-y-1'>
          <header className=' text-indigo-700 font-semibold mb-2'>
            Get to know me
          </header>
          <div className=' space-y-2 lg:flex lg:gap-4 xl:gap-6 '>
            <div className='text-container mb-4 lg:mb-0 '>
              <p className=' text-black/90 text-justify '>
                My name{' '}
                <span className=' text-pink-700 font-semibold'>
                  John Patrick Resurreccion
                </span>
                . I am an aspiring Front-End Web Developer that enjoys
                developing web-based solutions with just a simple effective
                design. I am a college student under Bachelor of Science in
                Information Technology (BSIT) course. I made the decision to
                pursue{' '}
                <span className=' text-pink-700 font-semibold'>
                  {' '}
                  Web Development
                </span>{' '}
                and have been associated with it. Although I am still at the
                beginning of my Web Development career, I am constantly learning
                and exploring different kinds of web technologies. <br /> <br />{' '}
                When I&apos;m not writing code and learning new technologies, I
                prefer to play online games. I also sing🎶 and play guitar🎸.
              </p>
              <div className='tech-stack space-y-1'>
                <header className=' text-2xl font-semibold mb-4 mt-4 text-center lg:text-left lg:mt-4 text-indigo-700 lg:mb-0 '>
                  Tech stack
                </header>
                <div className='icon-container flex justify-center gap-5 lg:justify-start '>
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
            <div className='img-container relative hidden lg:block lg:w-[2000px] h-[350px] xl:w-[1800px]'>
              <div className=' h-full absolute '></div>
              <img
                src='pic.jpg'
                alt=''
                className=' grayscale w-full h-full object-cover rounded shadow-xl '
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
