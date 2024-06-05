import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  const handleScroll = () => {
    setPageNo((prevItem) => (prevItem += 1));
  };

  return (
    <main className="pt-20">
      <h1 className="capitalize"> Popular {exploreParams.explore} Shows</h1>

      <section>
        <button > {exploreData.map((item,index) => {
          return <li key={index}>df</li>
        })}  </button>
      </section>
    </main>
  );
};

export default ExplorePage;
