import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stair = (props) => {
   const currentPath = useLocation().pathname

  const stairParentRef = useRef(null);
  const pageRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairParentRef.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(stairParentRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });

    gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1.3,
        scale:1.2
    })
  }, [currentPath]);

  return (
    <>
      <div ref={stairParentRef} className="h-screen w-full fixed top-0 z-20">
        <div className="w-full h-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>
        {props.children}
      </div>
    </>
  );
};

export default Stair;
