import { useState } from "react";

const ExcuseCard = ({ excuse }) => {
  const [likes, setLikes] = useState(excuse.likes);

  const handleLike = async () => {
    try {
      const response = await fetch(`http://localhost:3000/excuses/${excuse._id}`, {    //port running in 3000
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likes: likes + 1 }),
      });

      if (response.ok) {
        setLikes(likes + 1); // Update UI without refresh
      }
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-100  shadow-xl rounded-2xl p-6 border border-gray-100 max-w-sm transition-transform hover:scale-105 duration-300 ease-in-out">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{excuse.excuseText}</h2>
      <p className="text-sm text-gray-500 mb-1">
        <span className="font-semibold text-gray-700">Category:</span> {excuse.category}
      </p>
      <p className="text-sm text-gray-500 mb-1">
        <span className="font-semibold text-gray-700">Likes:</span> {likes}
      </p>
      <p className="text-sm text-gray-500 mb-4">
        <span className="font-semibold text-gray-700">Author ID:</span> {excuse.authorId}
      </p>
  
      <button
        className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
        onClick={handleLike}
      >
        👍 Like
      </button>
    </div>
  );
  
};

export default ExcuseCard;
