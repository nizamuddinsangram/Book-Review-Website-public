const BookCards = ({ item }) => {
  const { image, tags, bookName, category, rating } = item;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <p>tags</p>
        <h2 className="card-title">bookName</h2>
        <p>author</p>
        <p>category</p>
        <p>rating</p>
        {/* <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default BookCards;
