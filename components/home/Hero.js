import React from 'react';
import Link from 'next/link';

const Hero = () => {
  // style
  const style = {
    btn: 'border-2 px-5 text-sm py-2 rounded font-medium transition-all cursor-pointer uppercase shadow-lg',
  };
  return (
    <section className=' h-[95vh] grid place-items-center bg-white xl:h-screen'>
      <div className='container'>
        <div className='text-container text-center lg:space-y-2'>
          <p className=' text-black/80 font-medium text-sm '>
            Hey there👋, I am
          </p>
          <p className=' font-bold text-4xl text-indigo-700 xl:text-6xl '>
            John Patrick Resurreccion
          </p>
          <p className=' text-lg font-medium text-black/80 '>
            Aspiring{' '}
            <span className=' underline decoration-2 decoration-pink-500 underline-offset-2 text-black/80 font-semibold '>
              Software Developer
            </span>
          </p>
        </div>
        <div className='btn-container flex gap-2 justify-center mt-4'>
          <Link href='/contact'>
            <a
              className={`${style.btn} border-indigo-700 bg-indigo-700 text-white shadow hover:shadow-lg hover:bg-indigo-800 hover:border-indigo-800 `}
            >
              Contact Me
            </a>
          </Link>
          <Link href='/resume/John%20Patrick%20Resurreccion.pdf'>
            <a
              className={`${style.btn} border-indigo-700 text-indigo-700 hover:bg-indigo-50`}
              target='_blank'
            >
              View Resume
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
