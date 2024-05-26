import axios from "axios";
import { useEffect, useState } from "react";


const useFetchData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(endpoint);
      setData(res.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, error, loading };
};



export default useFetchData 