import React from "react";
import { Link } from "react-router-dom";

const ListedBooksCard = ({ book }) => {
  return (
    <div className="border rounded-lg shadow-md grid grid-cols-1 lg:flex p-4">
      {/* Left Side (Image) */}
      <div className="w-full lg:w-1/5">
        <img src={book?.image} alt="Book Cover" className="w-full h-52" />
      </div>
      {/* Right Side (Details) */}
      <div className="w-full lg:w-4/5 pl-4">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-2 text-start">{book?.bookName}</h2>
        {/* Author Name */}
        <p className="text-gray-500 mb-2 text-start text-lg font-medium ">
          By: {book?.author}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap mb-2">
          {book?.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-green-300 text-green-700 rounded-full px-2 py-1 text-sm mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
          <p>year of publisher: {book?.yearOfPublishing}</p>
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
          <div className="flex items-center justify-center">
            <p className="text-blue-500 btn bg-blue-200 mr-4">
              Category: {book?.category}
            </p>
            <p className="text-rose-400 bg-rose-200 btn">
              Rating: {book?.rating}
            </p>
            <Link
              to={`/card/${book?.bookId}`}
              className="bg-green-400 btn text-white px-4 py-2 rounded-md mx-5"
            >
              View Details
            </Link>
          </div>
          {/* View Details Button */}
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
