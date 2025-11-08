import gsap from "gsap";
import ProjectsCard from "../components/Projects/ProjectsCard";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  const images = [
    {
      img1: "../images/projects-img-13.jpg",
      img2: "../images/projects-img-14.jpg",
    },
    {
      img1: "../images/projects-img-1.jpg",
      img2: "../images/projects-img-2.jpg",
    },
    {
      img1: "../images/projects-img-3.jpg",
      img2: "../images/projects-img-4.jpg",
    },
    {
      img1: "../images/projects-img-5.jpg",
      img2: "../images/projects-img-6.jpg",
    },
    {
      img1: "../images/projects-img-7.jpg",
      img2: "../images/projects-img-8.jpg",
    },
    {
      img1: "../images/projects-img-9.jpg",
      img2: "../images/projects-img-10.jpg",
    },
    {
      img1: "../images/projects-img-11.jpg",
      img2: "../images/projects-img-12.jpg",
    },
    {
      img1: "../images/projects-img-13.jpg",
      img2: "../images/projects-img-14.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from('.project-cards', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.project-cards',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className="p-3 text-black bg-white mb-[100vh]">
      <div className="pt-[39.5vh]">
        <h2 className="font-[font2] uppercase text-[13vw] relative ">
          Projets
          <span className="absolute text-[2.5rem] top-14 right-[37vw]">16</span>
        </h2>
      </div>
      <div className="-mt-20 projects">
        {images.map((elem, idx) => {
          return (
            <div key={idx} className="project-cards w-full flex gap-4 mb-4 ">
              <ProjectsCard image1={elem.img1} image2={elem.img2} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
