import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { saveBook } from "../Utils/localStorage";
import useFetchData from "../Utils/useFetchData";

const BookDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { cardId } = useParams();
  const { data } = useFetchData();
  useEffect(() => {
    if (data) {
      const single = data.find((item) => item.bookId == parseFloat(cardId));
      setSingleData(single);
    }
  }, [data, cardId]);
  //   console.log(singleData);
  //localStorage
  const handleReadBooks = () => {
    const key1 = "readBook";
    saveBook(key1, singleData);
  };
  const handleWIshlist = () => {
    const key2 = "wishlist";
    saveBook(key2, singleData);
  };
  return (
    <div className="sm:grid grid-cols-1  lg:flex lg:justify-between lg:items-center p-4 border rounded-lg shadow-md">
      {/* Left Side (Image) */}
      <div className="w-full lg:w-1/2 pr-4">
        <img
          src={singleData?.image}
          alt="Book Image"
          className="w-full h-auto rounded-lg"
        />
      </div>
      {/* Right Side (Details) */}
      <div className="w-full lg:w-1/2 pl-4">
        {/* Title */}
        <h2 className="text-xl font-bold mb-2">Book Title</h2>
        {/* Seller Name */}
        <p className="text-gray-600 mb-2">Seller: Seller Name</p>
        {/* Rating and Reviews */}
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-2">★</span>
          <p className="mr-4">4.5 (500 reviews)</p>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap mb-2">
          <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm mr-2 mb-2">
            Tag 1
          </span>
          <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm mr-2 mb-2">
            Tag 2
          </span>
          {/* Add more tags as needed */}
        </div>
        {/* Horizontal Line */}
        <hr className="my-2" />
        {/* Additional Details */}
        <div className="mb-2">
          <p className="text-gray-600">Number of Pages: 300</p>
          <p className="text-gray-600">Publisher: Publisher Name</p>
          <p className="text-gray-600">Year of Publishing: 2022</p>
        </div>
        {/* Buttons */}
        <div className="flex">
          <button
            onClick={handleReadBooks}
            className="bg-blue-500 btn text-white px-4 py-2 rounded-md mr-2"
          >
            Read
          </button>
          <button
            onClick={handleWIshlist}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
