// src/pages/AddExcuse.js
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function AddExcuse({ onExcuseAdded }) {
  const [excuse, setExcuse] = useState({
    excuseText: "",
    category: "",
    authorId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExcuse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/excuses", excuse);

      if (onExcuseAdded) onExcuseAdded(res.data);
      setExcuse({ excuseText: "", category: "", authorId: "" });
    } catch (error) {
      console.error("Failed to add excuse:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-100 p-4"
    >
      <motion.form
        onSubmit={handleSubmit}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create New Excuse
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Excuse Text
          </label>
          <input
            type="text"
            name="excuseText"
            value={excuse.excuseText}
            onChange={handleChange}
            placeholder="Enter your excuse..."
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition duration-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={excuse.category}
            onChange={handleChange}
            placeholder="Health, Transport..."
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none transition duration-200"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-1">
            Author ID
          </label>
          <input
            type="text"
            name="authorId"
            value={excuse.authorId}
            onChange={handleChange}
            placeholder="Enter author ID"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition duration-200"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200"
          type="submit"
        >
          Submit Excuse
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
