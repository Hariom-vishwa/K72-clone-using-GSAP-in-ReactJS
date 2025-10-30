import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className=" font-[font1] text-white text-center pt-4 ">
      <div className="flex items-center justify-center uppercase text-[9.5vw] leading-[9vw]">
        L'étincelle
        </div>
      <div className="flex items-center justify-center uppercase text-[9.5vw] leading-[9vw]">
        qui
        <div className="h-[8vw] w-[16vw] rounded-full overflow-hidden -mt-4">
            <Video/>
        </div>
        génère
        </div>
      <div className="flex items-center justify-center uppercase text-[9.5vw] leading-[9vw]">
        la créativité
        </div>
    </div>
  );
};

export default HomeHeroText;
