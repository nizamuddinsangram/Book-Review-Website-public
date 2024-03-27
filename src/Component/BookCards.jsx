import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookCards = ({ item }) => {
  const { image, tags, bookName, category, rating, author } = item;
  return (
    <div className="mb-10">
      <Link to={`/card/${item.bookId}`}>
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl h-72 w-full" />
          </figure>
          <div className="card-body  text-start">
            <p>
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-200 text-green-700 rounded-full px-2 py-1 text-sm mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </p>
            <h2 className="text-3xl font-semibold">{bookName}</h2>
            <p className="text-lg font-semibold  text-gray-500">By: {author}</p>
            <hr className=" my-2" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-gray-500">{category}</p>
              <div className="flex items-center  ">
                <p className="text-lg font-semibold text-gray-500">{rating}</p>
                <CiStar className="mx-2" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCards;
