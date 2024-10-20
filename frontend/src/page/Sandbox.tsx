import { useEffect, useState } from "react";
import axios from "axios";

const Sandbox = () => {
  // State to store the fetched data
  const [data, setData] = useState([]);
  const API_KEY = "7f254722-08c5-4339-a037-5dfa0c520849";

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get("/branches-api/1/v1/healthcheck", {
        headers: {
          KeyId: `${API_KEY}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return <div>sanbox</div>;
};

export default Sandbox;