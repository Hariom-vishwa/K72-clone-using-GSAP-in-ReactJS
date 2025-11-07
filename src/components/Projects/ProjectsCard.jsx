const ProjectsCard = () => {
  return (
    <>
      <div className="w-full h-[644px] flex gap-4 mb-4 ">
        <div className="w-1/2 h-full group transition-all relative overflow-hidden hover:rounded-4xl">
          <img
            className="w-full h-full group-hover:scale-[1.05] transition-all object-cover"
            src="../images/projects-img-1.jpg"
            alt="img-1"
          />
          <div className="absolute group-hover:opacity-100 opacity-0 top-0 flex items-center justify-center left-0 h-full w-full bg-black/20">
            <h2 className="uppercase text-6xl font-[font1] border-4 pt-4 px-4 text-white border-white rounded-full">
              Voir le projet
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
