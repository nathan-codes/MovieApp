import { useLocation } from "react-router-dom";


const SearchPage = () => {

  const location = useLocation()

  console.log("location", location)
  return <div>Search Page</div>;
};

export default SearchPage;
