import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditExcuse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [excuseText, setExcuseText] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchExcuse = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/excuses/${id}`);
        setExcuseText(res.data.excuseText);
        setCategory(res.data.category);
      } catch (error) {
        console.error("Failed to fetch excuse:", error);
      }
    };
    fetchExcuse();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/excuses/${id}`, {
        excuseText,
        category,
      });
      navigate("/");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Excuse</h2>
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <input
          type="text"
          value={excuseText}
          onChange={(e) => setExcuseText(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Excuse text"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Category"
        />
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
