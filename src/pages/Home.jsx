import BannerHome from "../components/BannerHome";
import HorizontalScrollCardGroup from "../components/HorizontalScrollCardGroup";
import useFetchData from "../hooks/useFetchData";
import { useSelector } from "react-redux";

const Home = () => {
  const { data: nowShowingData } = useFetchData("/movie/now_playing");
  const { data: topRated } = useFetchData("/movie/top_rated");
  const { data: popularTv } = useFetchData("/tv/popular");
  const { data: onAir } = useFetchData("/tv/on_the_air");

  const data = useSelector((state) => {
    return state.movieoData.bannerData;
  });



  return (
    <div className="">
      <BannerHome />
      <HorizontalScrollCardGroup
        title={"Trending Now"}
        data={data}
        trending={true}
        media_type="movie"
      />

      <HorizontalScrollCardGroup
        title={"Now Playing"}
        data={nowShowingData}
        media_type="movie"
      />
      <HorizontalScrollCardGroup
        title={"Top Rated Movies"}
        data={topRated}
        media_type="movie"
      />
      <HorizontalScrollCardGroup
        title={"Popular Tv Show"}
        data={popularTv}
        media_type="movie"
      />
      <HorizontalScrollCardGroup
        title={"On The Air"}
        data={onAir}
        media_type="movie"
      />
    </div>
  );
};

export default Home;
