import { useEffect, useState } from "react";
import ExcuseCard from "./components/ExcuseCard";
import AddExcuse from "./components/AddExcuse";
import axios from "axios";

export default function App() {
  const [excuses, setExcuses] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/excuses");
      setExcuses(response.data);
    } catch (err) {
      console.error("Error fetching data with Axios:", err);
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleExcuseAdded = (newExcuse) => {
    setExcuses((prev) => [newExcuse, ...prev]); // add to top
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        🚫 Morning Class Excuses
      </h1>
      <p className="text-lg text-gray-700 mb-8">Manage your excuses smartly 😄</p>
      <AddExcuse onExcuseAdded={handleExcuseAdded} />
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {excuses.map((excuse) => (
          <ExcuseCard key={excuse._id} excuse={excuse} onDelete={fetchData} />
        ))}
      </div>
    </div>
  );
}
