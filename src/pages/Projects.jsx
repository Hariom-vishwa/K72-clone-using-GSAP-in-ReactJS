import ProjectsCard from "../components/Projects/ProjectsCard";

const Projects = () => {
  return (
    <div className="p-3 text-black bg-white">
      <div className="pt-[39.5vh]">
        <h2 className="font-[font2] uppercase text-[13vw] relative ">
          Projets{" "}
          <span className="absolute text-[2.5rem] top-14 right-[37vw]">16</span>
        </h2>
      </div>
      <div className="-mt-20">
        <ProjectsCard/>
      </div>
    </div>
  );
};

export default Projects;
