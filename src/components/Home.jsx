import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Welcome to the Online Library 📚</h1>
      <p className="text-lg mb-8 text-gray-700">Discover, add, and explore books with ease.</p>

      <div className="flex gap-6">
        <Link to="/browse" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Browse Books
        </Link>
        <Link to="/add" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Add New Book
        </Link>
      </div>
    </div>
  );
};

export default Home;
