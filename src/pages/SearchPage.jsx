import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [searchTerm,setSearchTerm] = useState(location.search.slice(3))
  const [searchData, setSearchData] = useState([]);

  const fetchSearchData = async () => {
    try {
      const results = await axios.get("/search/collection", {
        params: {
          query: searchTerm,
          page:1
        },
      });
      setSearchData((prevState) => {
        return [...prevState, ...results.data.results];
      });
    
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSearchData();

  }, [searchTerm]);

  console.log("location", location.search.slice(3));
  console.log(searchData)
  
  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h2 className="capitalize text-lg lg:text-lg font-semibold my-3">
          Search Results
        </h2>

        <section className=" grid grid-cols-[repeat(auto-fit,230px)] gap-6">
          {searchData.map((item, index) => {
            return (
              <Card
                key={index}
                data={item}
           
              />
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default SearchPage;
