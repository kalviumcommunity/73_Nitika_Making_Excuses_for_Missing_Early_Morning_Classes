import ExcuseCard from "./components/ExcuseCard" 


const dummyExcuse = {
  excuseText: "I missed class because my alarm didn’t ring.",
  category: "Morning Excuses",
  likes: 12,
  authorId: "123456789",
};

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Making Excuses for Missing Morning Classes
      </h1>
      <p className="text-lg text-gray-600 mb-4 text-center max-w-xl">
        A fun and relatable way to share and find the best excuses for skipping those early morning classes!
      </p>

      {/* Render Excuse Card */}
      <ExcuseCard excuse={dummyExcuse} />
    </div>
  );
}
