import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ExplorePage = () => {
  const exploreParams = useParams();
  const [pageNo, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [exploreData, setExploreData] = useState([]);

  const fetchExploreData = async () => {
    try {
      const res = await axios.get(`/discover/${exploreParams.explore}`, {
        params: {
          page: pageNo,
        },
      });
      setTotalPages(res.data.total_pages);

      setExploreData((prevData) => {
        return [...prevData, res.data.results];
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExploreData();
  }, [pageNo]);

  console.log("Expore Params", exploreParams);
  console.log("response", exploreData);

  const handlescroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
  }, []);

  return (
    <main className="pt-20">
      <h1 className="capitalize"> Popular {exploreParams.explore} Shows </h1>

      <section>
        {exploreData.map((item, index) => {
          return <Card data={exploreData} key={index} />;
        })}
      </section>
    </main>
  );
};

export default ExplorePage;
