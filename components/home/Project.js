import React from "react";
import Divider from "../Divider";
import { project } from "../../data/project";
import Link from "next/link";

const Project = () => {
  return (
    <section className="bg-white">
      <div className="container py-12 w-[90%] m-auto lg:w-[800px] xl:w-[1000px]">
        <header className="text-center space-y-2 mb-8">
          <p className=" text-indigo-700 capitalize font-semibold text-lg ">
            works
          </p>
          <div className=" grid place-items-center ">
            <Divider />
          </div>
          <p className=" capitalize text-2xl font-semibold text-black/90 underline decoration-2 underline-offset-2 decoration-pink-500 ">
            personal projects
          </p>
        </header>
        <div className="project-container space-y-6 md:m-auto md:w-[50%]  lg:grid lg:grid-cols-2 lg:place-items-center lg:space-y-0 lg:gap-6 lg:w-[625px] ">
          {project.map((data) => {
            return (
              <div
                className="box rounded shadow-lg transition-all bg-white space-y-6 lg:w-[300px] "
                key={data.id}
              >
                <div className={`img-container px-4 pt-4 rounded`}>
                  <img src={data.img} alt="" className="rounded " />
                </div>
                <div className="text-container px-4 pb-4">
                  <p className="text-center font-medium text-lg mb-2 text-indigo-700">
                    {data.title}
                  </p>
                  <p className="text-justify mb-4 text-black/90">
                    {data.description}{" "}
                  </p>
                  <div className="link my-2 grid place-items-center">
                    <Link href={`/work/${data.id}`}>
                      <a className="bg-indigo-700 hover:bg-indigo-800 transition-all cursor-pointer text-white font-medium px-4 py-2 rounded shadow-md text-sm uppercase">
                        Read more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
