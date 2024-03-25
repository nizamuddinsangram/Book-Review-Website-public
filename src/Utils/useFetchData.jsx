// export const fetchData = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null; // Or handle the error accordingly
//   }
// };
import { useEffect, useState } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("/data.json");
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { data, loading };
};

export default useFetchData;

// const fetchData = () => {

//   return ;
// };

// export default FetchData;
