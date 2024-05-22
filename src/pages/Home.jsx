import BannerHome from "../components/BannerHome";
import HorizontalScrollCardGroup from "../components/HorizontalScrollCardGroup";

import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => {
    return state.movieoData.bannerData;
  });
  return (
    <div className="">
      <BannerHome />
      <HorizontalScrollCardGroup title={"Trending Now"} data={data} />
 
    </div>
  );
};

export default Home;
