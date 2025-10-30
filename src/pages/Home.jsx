
import Video from "../components/Home/Video";
import HomeHeroText from "../components/Home/HomeHeroText";
import HomeBottomText from "../components/Home/HomeBottomText";

const Home = () => {
 

  return (
    <>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between overflow-hidden">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </>
  );
};

export default Home;
