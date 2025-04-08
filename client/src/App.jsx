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
      setError("⚠️ Failed to fetch data. Please try again.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleExcuseAdded = () => {
    fetchData(); // re-fetch to get updated excuse with Mongo _id
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🚫 Morning Class Excuses
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A fun and relatable way to share and find the best excuses for skipping those early morning classes!
          </p>
        </header>

        <AddExcuse onExcuseAdded={handleExcuseAdded} />

        {error && (
          <p className="text-red-500 font-medium text-center mt-4">{error}</p>
        )}

        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {excuses.map((excuse) => (
            <ExcuseCard key={excuse._id || excuse.id} excuse={excuse} />
          ))}
        </section>
      </div>
    </div>
  );
}
