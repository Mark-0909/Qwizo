export default function Navbar() {
    return (
      <nav className="w-64 min-h-screen bg-gray-800 text-white p-4 flex flex-col gap-4 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <a href="#" className="py-2 px-4 rounded-md hover:bg-gray-700 transition">
          DASHBOARD
        </a>
        <a href="#" className="py-2 px-4 rounded-md hover:bg-gray-700 transition">
          CLASSES
        </a>
        <a href="#" className="py-2 px-4 rounded-md hover:bg-gray-700 transition">
          RECORDS
        </a>
        <a href="#" className="py-2 px-4 rounded-md hover:bg-gray-700 transition">
          QUIZZES
        </a>
      </nav>
    );
  }
  