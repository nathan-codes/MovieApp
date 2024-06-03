import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ExplorePage = () => {
  const exploreParams = useParams();
  const [pageNo, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  const [exploreData, setExploreData] = useState([])

  const fetchExploreData = async () => {
    try {
      const res = await axios.get(`/discover/${exploreParams.explore}`, {
        params: {
          page: pageNo,
        },
      });

      console.log("response", res.data.results);
      setExploreData((prevData) => {
        return ...prev
      })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExploreData();
  }, []);

  console.log("Expore Params",exploreParams);

  return (
    <main className="pt-20">
      <h1 className="capitalize"> Popular {exploreParams.explore} Shows </h1>

      <section></section>
    </main>
  );
};

export default ExplorePage;
