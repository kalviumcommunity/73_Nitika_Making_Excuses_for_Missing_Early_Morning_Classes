import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExcuseCard = ({ excuse, onDelete }) => {
  const [likes, setLikes] = useState(excuse.likes);
  const navigate = useNavigate();

  const handleLike = async () => {
    try {
      const response = await fetch(`http://localhost:3000/excuses/${excuse._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likes: likes + 1 }),
      });
      if (response.ok) setLikes(likes + 1);
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${excuse._id}`);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this excuse?");
    if (!confirmed) return;
    try {
      await fetch(`http://localhost:3000/excuses/${excuse._id}`, {
        method: "DELETE",
      });
      onDelete(); // refresh the list
    } catch (error) {
      console.error("Failed to delete excuse:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-100 shadow-xl rounded-2xl p-6 border border-gray-100 max-w-sm transition-transform hover:scale-105 duration-300 ease-in-out">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{excuse.excuseText}</h2>
      <p className="text-sm text-gray-500 mb-1">
        <span className="font-semibold text-gray-700">Category:</span> {excuse.category}
      </p>
      <p className="text-sm text-gray-500 mb-4">
        <span className="font-semibold text-gray-700">Likes:</span> {likes}
      </p>
      <div className="flex justify-between">
        <button onClick={handleLike} className="bg-gradient-to-r from-blue-300 to-pink-400 text-white px-3 py-1 rounded hover:bg-green-600">
          👍 Like
        </button>
        <button onClick={handleEdit} className=" bg-gradient-to-r from-blue-300 to-purple-700  text-white px-3 py-1 rounded hover:bg-yellow-500">
          ✏️ Edit
        </button>
        <button onClick={handleDelete} className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default ExcuseCard;
