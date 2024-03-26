import { Link } from "react-router-dom";
import banner from "../../public/img7.avif";
const Banner = () => {
  return (
    <div className="flex items-center justify-center h-[70vh] bg-gray-200">
      <div className="flex w-full max-w-7xl mx-auto  rounded-lg  overflow-hidden">
        {/* Left Side (60%) */}
        <div className="w-3/5  py-8 px-6 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Books to freshen <br />
            up your bookshelf
          </h2>
          <Link
            to="/listed-book"
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
          >
            View The List
          </Link>
        </div>
        {/* Right Side (40%) */}
        <div className="w-2/5">
          <img
            src={banner}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
