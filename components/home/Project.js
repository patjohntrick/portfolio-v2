import React from "react";
import Divider from "../Divider";
import { project } from "../../data/project";
import Link from "next/link";

const Project = () => {
  return (
    <section className="bg-slate-50">
      <div className="container py-10 w-[90%] m-auto">
        <header className="text-center space-y-2 mb-8">
          <p className=" text-blue-700 capitalize font-semibold text-lg ">
            works
          </p>
          <div className=" grid place-items-center ">
            <Divider />
          </div>
          <p className=" capitalize text-2xl font-semibold text-black/90 ">
            personal projects
          </p>
        </header>
        <div className="project-container space-y-6">
          {project.map((data) => {
            return (
              <div
                className="box p-4 rounded shadow-md transition-all bg-white space-y-6"
                key={data.id}
              >
                <div className="img-container">
                  <img src={data.img} alt="" className="rounded" />
                </div>
                <div className="text-container">
                  <p className="text-center font-medium text-lg mb-2 text-blue-700">
                    {data.title}
                  </p>
                  <p className="text-justify mb-4">{data.description} </p>
                  <div className="link my-2 grid place-items-center">
                    <Link href="/">
                      <a className="bg-blue-700 hover:bg-blue-800 transition-all cursor-pointer text-white font-medium px-4 py-2 rounded shadow-md text-sm uppercase">
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
