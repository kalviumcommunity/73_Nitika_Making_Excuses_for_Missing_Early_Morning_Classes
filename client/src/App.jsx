import { useEffect, useState } from "react";
import ExcuseCard from "./components/ExcuseCard";
import axios from "axios"

export default function App() {
  const [excuses, setExcuses] = useState([]);
  const [error,setError] = useState("")

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/excuses");
      console.log(response.data)
      setExcuses(response.data); // update state with fetched data
    } catch (err) {
      console.error("Error fetching data with Axios:", err);
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Making Excuses for Missing Morning Classes
      </h1>
      <p className="text-lg text-gray-600 mb-4 text-center max-w-xl">
        A fun and relatable way to share and find the best excuses for skipping those early morning classes!
      </p>

      {/* Show excuses dynamically */}
      {excuses.length > 0 ? (
        excuses.map((excuse) => <ExcuseCard key={excuse._id} excuse={excuse} />)
      ) : (
        <p>No excuses found.</p>
      )}
    </div>
  );
}
