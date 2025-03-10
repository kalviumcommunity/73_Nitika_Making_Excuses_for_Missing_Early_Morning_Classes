const ExcuseCard = ({ excuse }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 max-w-sm">
        <h2 className="text-xl font-semibold text-gray-800">{excuse.excuseText}</h2>
        <p className="text-gray-600">Category: <span className="font-medium">{excuse.category}</span></p>
        <p className="text-gray-600">Likes: <span className="font-medium">{excuse.likes}</span></p>
        <p className="text-gray-600">Author ID: <span className="font-medium">{excuse.authorId}</span></p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Like
        </button>
      </div>
    );
  };
  
  export default ExcuseCard;