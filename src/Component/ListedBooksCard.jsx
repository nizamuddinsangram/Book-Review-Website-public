import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoWomanSharp } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const ListedBooksCard = ({ book }) => {
  return (
    <div className="border rounded-lg shadow-md grid grid-cols-1 lg:flex p-4">
      <div className="w-full lg:w-1/5">
        <img src={book?.image} alt="Book Cover" className="w-full h-52" />
      </div>

      <div className="w-full lg:w-4/5 pl-4">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 text-start">
          {book?.bookName}
        </h2>

        <p className="text-gray-500 mb-2 text-start text-sm lg:text-lg font-medium ">
          By: {book?.author}
        </p>

        <div className="flex flex-wrap mb-2 items-center ">
          {book?.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-green-300 text-green-700 rounded-full px-2 py-1 text-sm mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
          <div className=" flex items-center justify-center text-lg lg:text-xl">
            <FaMapMarkerAlt className="mx-2" />
            <p>year of publisher: {book?.yearOfPublishing}</p>
          </div>
        </div>

        <hr className="my-2" />

        <div className="flex mb-2">
          <div className="flex items-center ">
            <IoWomanSharp className="mx-1" />
            <p className="text-gray-600 mr-4">Publisher: {book?.publisher}</p>
          </div>
          <div className="flex items-center ">
            <RiPagesLine className="mx-1" />
            <p className="text-gray-600">Pages: {book?.totalPages}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
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
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
