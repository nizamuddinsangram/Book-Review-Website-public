import React from "react";
import { Link } from "react-router-dom";

const ListedBooksCard = ({ book }) => {
  return (
    <div className="border rounded-lg shadow-md grid grid-cols-1 lg:flex p-4">
      {/* Left Side (Image) */}
      <div className="w-full lg:w-1/5">
        <img src={book?.image} alt="Book Cover" className="w-full h-auto" />
      </div>
      {/* Right Side (Details) */}
      <div className="w-full lg:w-4/5 pl-4">
        {/* Title */}
        <h2 className="text-xl font-bold mb-2">{book?.bookName}</h2>
        {/* Author Name */}
        <p className="text-gray-600 mb-2">Author: {book?.author}</p>
        {/* Tags */}
        <div className="flex flex-wrap mb-2">
          {book?.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Horizontal Line */}
        <hr className="my-2" />
        {/* Publisher and Pages */}
        <div className="flex mb-2">
          <p className="text-gray-600 mr-4">Publisher: {book?.publisher}</p>
          <p className="text-gray-600">Pages: {book?.totalPages}</p>
        </div>
        {/* Category, Rating, and View Details Button */}
        <div className="flex items-center justify-between">
          {/* Category and Rating */}
          <div className="flex">
            <p className="text-gray-600 mr-4">Category: {book?.category}</p>
            <p className="text-gray-600">Rating: {book?.rating}</p>
          </div>
          {/* View Details Button */}
          <Link
            to={`/card/${book?.bookId}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
