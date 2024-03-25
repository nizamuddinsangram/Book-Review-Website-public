import { Link } from "react-router-dom";

const BookCards = ({ item }) => {
  const { image, tags, bookName, category, rating, author } = item;
  return (
    <>
      <Link to={`/card/${item.bookId}`}>
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl h-96" />
          </figure>
          <div className="card-body  text-start">
            <p>tags</p>
            <h2 className="card-title">{bookName}</h2>
            <p>{author}</p>
            <div className="flex justify-between ">
              <p>{category}</p>
              <p>{rating}</p>
            </div>
            {/* <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
      </div> */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default BookCards;
