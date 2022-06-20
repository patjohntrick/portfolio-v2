import React, { useEffect, useState } from "react";
import IndividualProject from "../../components/home/IndividualProject";
import { project } from "../../data/project";

export const getStaticPaths = () => {
  const paths = project.map((data) => {
    return {
      params: { id: data.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = (req) => {
  const id = req.params.id;
  return {
    props: { id },
  };
};
const Id = ({ id }) => {
  //state
  const [projectData, setProjectData] = useState([]);

  // project data
  useEffect(() => {
    const work = project.filter((data) => data.id.toString() == id);
    setProjectData(work);
  }, []);

  return (
    <section className=" pt-[70px]">
      <IndividualProject projectData={projectData} />
    </section>
  );
};

export default Id;
