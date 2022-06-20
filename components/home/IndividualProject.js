import React from "react";
import Link from "next/link";
import { BsFillCaretRightFill } from "react-icons/bs";
import { project } from "../../data/project";
import Head from "next/head";

const IndividualProject = ({ projectData }) => {
  // style
  const style = {
    listStyle: "list-disc",
    btn: "px-4 py-2 uppercase text-sm rounded cursor-pointer shadow-lg transition-all font-semibold ",
  };
  // console.log(projectData);
  const imgs = projectData.map((img) => img.imgs);
  // console.log(imgs);
  return (
    <section className="py-5">
      <Head>
        <title>John Patrick Resurreccion | Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container md:m-auto md:w-[80%] lg:w-[800px] xl:w-[950px] ">
        {projectData.map((data) => {
          return (
            <React.Fragment key={data.id}>
              <header className=" text-center font-semibold text-indigo-700 text-xl mb-2 lg:text-3xl ">
                {data.title}
              </header>
              <div className="container xl:grid xl:grid-cols-2 xl:gap-4 xl:place-content-start ">
                <div className="img-container ">
                  <div className=" xl:hidden ">
                    <img
                      src={data.img}
                      alt=""
                      className=" m-auto w-[90%] rounded shadow my-4 lg:w-full xl:my-0 "
                    />
                  </div>
                  <div className="hidden xl:block space-y-2">
                    {projectData.map((details) => {
                      return details.imgs.map((imgs, index) => {
                        return (
                          <React.Fragment key={index}>
                            <img
                              src={imgs.img}
                              alt=""
                              className="rounded shadow-md"
                            />
                          </React.Fragment>
                        );
                      });
                    })}
                  </div>
                </div>
                <div className="text-container m-auto w-[90%] lg:w-full xl:w-full xl:m-0 xl:sticky xl:top-[100px] ">
                  <div className="description mb-2">
                    <header className=" font-semibold text-lg text-black/80 mb-1 underline decoration-2 decoration-pink-500 underline-offset-2 ">
                      Description
                    </header>
                    <p className=" text-justify text-black/80 ">
                      {data.longDescription}
                    </p>
                  </div>

                  <div className="features">
                    <p className="capitalize font-semibold text-base text-black/80 mb-1">
                      features :
                    </p>
                    <div className=" space-y-1 mb-2 ">
                      {data.features.map((feat, index) => {
                        return (
                          <div
                            className="list flex gap-2 text-justify text-blue-800 text-xs"
                            key={index}
                          >
                            <BsFillCaretRightFill />
                            <p className=" w-[95%] text-black/90 text-sm">
                              {feat.feature}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="technology mb-4">
                    <header className=" font-semibold text-indigo-700 text-lg mb-1 ">
                      Techhnologies used
                    </header>
                    <div className="container flex  gap-2 mb-2">
                      {data.technology.map((tech, index) => {
                        return (
                          <div
                            className=" text-4xl text-black/90 hover:text-indigo-700 "
                            key={index}
                          >
                            {tech}
                          </div>
                        );
                      })}
                    </div>
                    <div className="packages hidden xl:block">
                      <header className="text-black/80 font-bold text-sm">
                        Other Packages :
                      </header>
                      <div className=" flex flex-wrap ">
                        {data.packages.map((packages, index) => {
                          return (
                            <div
                              className=" text-black/80 hover:text-pink-700 "
                              key={index}
                            >
                              <p className=" text-sm font-medium mr-2 cursor-default ">
                                {packages}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="btn flex justify-center gap-2">
                    <div
                      className={`${style.btn} border-2 bg-indigo-700 border-indigo-700 hover:bg-indigo-800 hover:border-indigo-800 text-white`}
                    >
                      <Link href={`${data.code}`}>
                        <a target="_blank">view code</a>
                      </Link>
                    </div>
                    <div
                      className={`${style.btn} text-indigo-700 border-2 border-indigo-700 hover:bg-indigo-100 `}
                    >
                      <Link href={`${data.demo}`}>
                        <a target="_blank">live demo</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default IndividualProject;
