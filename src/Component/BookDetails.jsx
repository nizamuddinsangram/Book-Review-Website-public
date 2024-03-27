import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { saveBook } from "../Utils/localStorage";
import useFetchData from "../Utils/useFetchData";

const BookDetails = () => {
  const [alreadyAddedToRead, setAlreadyAddedToRead] = useState(false);
  const [alreadyAddedToWishlist, setAlreadyAddedToWishlist] = useState(false);
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
    if (!alreadyAddedToRead) {
      saveBook(key1, singleData);
      setAlreadyAddedToRead(true);
      toast.success("Blog Bookmarked Successfully!");
    } else {
      toast.error("Book already exists");
    }
    // saveBook(key1, singleData);
  };
  const handleWIshlist = () => {
    const key2 = "wishlist";
    if (alreadyAddedToRead) {
      toast.error("Book already added to Read list, cannot add to Wishlist");
    } else if (!alreadyAddedToWishlist) {
      saveBook(key2, singleData);
      setAlreadyAddedToWishlist(true);
      toast.success("Book added to Wishlist");
    } else {
      toast.error("Book already added to Wishlist");
    }
    //
    // const key2 = "wishlist";
    // saveBook(key2, singleData);
  };
  return (
    <div>
      <div className="sm:grid  grid-cols-1 lg:flex lg:justify-between lg:items-center rounded-lg  my-10 lg:h-[80vh] lg:mt-16 lg:px-12 mb-10 lg:mb-20">
        {/* Left Side (Image) */}
        <div className="w-full   lg:w-1/2 pr-4">
          <img
            src={singleData?.image}
            alt="Book Image"
            className="w-full  rounded-lg"
          />
        </div>
        {/* Right Side (Details) */}
        <div className="w-full lg:w-1/2 pl-4">
          <h2 className="text-2xl lg:text-5xl font-semibold my-2 lg:my-4">
            {singleData?.bookName}
          </h2>
          {/* Seller Name */}
          <p className="text-gray-600 my-2 lg:my-4 text-lg lg:text-xl">
            By: <span className="text-xl">{singleData?.author}</span>
          </p>
          {/* Rating and Reviews */}
          <hr className="lg:my-4 my-2" />
          <p className="text-lg lg:text-xl">{singleData?.category}</p>{" "}
          <hr className="lg:my-4 my-2" />
          <p className="text-xl font-semibold my-3 lg:my-10 leading-tight	 lg:leading-loose	">
            Reviews:{" "}
            <span className="text-sm lg:text-lg font-normal">
              {singleData?.review}
            </span>
          </p>
          {/* Tags */}
          <p className="text-sm lg:text-lg  font-bold mb-2 lg:mb-6">
            Tags{"  "}
            {singleData?.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-green-200 text-green-700 rounded-full px-2 py-1 text-sm mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </p>
          {/* Horizontal Line */}
          <hr className="my-1 lg:my-4" />
          {/* Additional Details */}
          <div className="mb-2 lg:mb-6">
            <p className="text-gray-600 my-1 lg:my-2">
              Number of Pages: <span>{singleData?.totalPages}</span>
            </p>
            <p className="text-gray-600 my-1 lg:my-2">
              Publisher: <span>{singleData?.publisher}</span>{" "}
            </p>
            <p className="text-gray-600 my-1 lg:my-2">
              Year of Publishing:<span>{singleData?.yearOfPublishing}</span>{" "}
            </p>
            <p className="text-gray-600">
              Rating:<span>{singleData?.rating}</span>{" "}
            </p>
          </div>
          {/* Buttons */}
          <div className="flex">
            <button
              onClick={handleReadBooks}
              className=" btn btn-outline  font-bold text-lg px-4 py-2 rounded-md mr-2 "
            >
              Read
            </button>
            <button
              onClick={handleWIshlist}
              className="btn btn-accent text-white px-4 py-2 rounded-md"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
