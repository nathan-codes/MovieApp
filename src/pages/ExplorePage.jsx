import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ExplorePage = () => {
  const exploreParams = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [exploreData, setExploreData] = useState([]);

  const fetchExploreData = async () => {
    try {
      const res = await axios.get(`/discover/${exploreParams.explore}`, {
        params: {
          page: pageNo,
        },
      });
      console.log("Explore Data", exploreData);
      setExploreData((prevData) => {
        return [...prevData, ...res.data.results];
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExploreData();
  
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1)
    setExploreData([])
    fetchExploreData()
  }, [exploreParams.explore])

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prevItem) => (prevItem += 1));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  

  return (
    <main className="pt-20">
      <h1 className="capitalize"> Popular {exploreParams.explore} Shows</h1>

      <section className=" grid grid-cols-[repeat(auto-fit,230px)] gap-6">
        {exploreData.map((item, index) => {
          return <Card key={index} data={item} media_type={exploreParams.explore}/>;
        })}
      </section>
    </main>
  );
};

export default ExplorePage;
