import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url: string) => {
  const [data, setData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data); // Set the data correctly
      } catch (error) {
        console.error("Error fetching officers:", error);
      }
    };
    fetchData();
  }, [url]); // Add dependency array with 'url' to avoid re-fetching

  return { data };
};
