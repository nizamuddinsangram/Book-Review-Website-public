import { Link } from "react-router-dom";
import banner from "../../public/img7.avif";
const Banner = () => {
  return (
    <div className="  lg:flex lg:items-center rounded-lg lg:justify-center  h-[70vh] bg-gray-200 ">
      <div className="sm:grid sm:grid-cols-2 lg:flex  w-full max-w-7xl mx-auto  rounded-lg  overflow-hidden">
        {/* Left Side (60%) */}
        <div className="w-full lg:w-3/5   py-8 px-6 flex flex-col justify-center items-center">
          <h2 className="text-3xl lg:text-6xl  text-start font-medium mb-4 leading-snug		">
            Books to freshen up <br />
            your bookshelf
          </h2>
          <Link
            to="/listed-book"
            className="bg-green-500  text-left  text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
          >
            View The List
          </Link>
        </div>

        <div className="w-full lg:w-2/5">
          <img
            src={banner}
            alt="Image"
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
