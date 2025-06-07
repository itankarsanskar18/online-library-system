import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BrowseBooks = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">Browse Books</h2>

      {books.length === 0 ? (
        <p className="text-center text-gray-500">No books available. Try adding one!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
              <p className="text-gray-600 mb-2">by {book.author}</p>
              <Link
                to={`/book/${book.id}`}
                className="inline-block mt-2 text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseBooks;
