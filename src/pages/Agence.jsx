import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imgDivRef = useRef(null);
  const imgRef = useRef(null);

  const imageArray = [
    "images/person-1.jpg",
    "images/person-2.jpg",
    "images/person-3.jpg",
    "images/person-4.jpg",
    "images/person-5.jpg",
    "images/person-6.jpg",
    "images/person-7.jpg",
    "images/person-8.jpg",
    "images/person-9.jpg",
    "images/person-10.jpg",
    "images/person-11.jpg",
  ];

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: "top 30%",
        end: "top -130%",
        pin: true,
        pinSpacing:true,
        pinReparent:true,
        pinType:"transform",
        anticipatePin:1,
        scrub: 1,
        invalidateOnRefresh:true,
        onUpdate: (el) => {
          let imgIndex;
          if (el.progress < 1) {
            imgIndex = Math.floor(el.progress * imageArray.length);
          } else {
            imgIndex = imageArray.length - 1;
          }
          imgRef.current.src = imageArray[imgIndex];
        },
      },
    });
  });

  return (
    <>
      <div className="bg-[#030712]">
        <div className="section1 relative py-1">
          <div
            ref={imgDivRef}
            className="absolute overflow-hidden w-[15vw] h-[20vw] rounded-3xl top-60 left-[30vw]"
          >
            <img
              ref={imgRef}
              className="w-full h-full object-cover"
              src="/images/person-1.jpg"
              alt=""
            />
          </div>
          <div className="relative font-[font2] text-white ">
            <div className="mt-[53vh]">
              <h1 className="text-[20vw] uppercase leading-[18vw] text-center">
                Soixan7e
                <br />
                Douze
              </h1>
            </div>
            <div className="pl-[40%] ">
              <p className="text-6xl">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Notre curiosité nourrit notre créativité. On reste humbles et on
                dit non aux gros egos, même le vôtre. Une marque est vivante.
                Elle a des valeurs, une personnalité, une histoire. Si on oublie
                ça, on peut faire de bons chiffres à court terme, mais on la tue
                à long terme. C’est pour ça qu’on s’engage à donner de la
                perspective, pour bâtir des marques influentes.
              </p>
            </div>
          </div>
        </div>
        <div className="section2 h-screen"></div>
      </div>
    </>
  );
};

export default Agence;
