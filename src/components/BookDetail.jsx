import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetail = () => {
  const { id } = useParams(); // Get book ID from URL
  const navigate = useNavigate();

  const book = useSelector((state) =>
    state.books.find((b) => b.id.toString() === id)
  );

  if (!book) {
    return (
      <div className="text-center mt-20 text-gray-600">
        <h2 className="text-2xl font-bold">Book not found</h2>
        <button
          onClick={() => navigate('/browse')}
          className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded"
        >
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-white">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4">{book.title}</h2>
      <p className="text-lg text-gray-800 mb-2"><strong>Author:</strong> {book.author}</p>
      <p className="text-gray-700 mb-4">{book.description}</p>

      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
      >
        ← Back
      </button>
    </div>
  );
};

export default BookDetail;  // <-- Missing "s" here

