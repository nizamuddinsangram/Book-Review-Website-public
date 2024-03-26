import Banner from "../../Component/Banner";
import BookCards from "../../Component/BookCards";
import useFetchData from "../../Utils/useFetchData";

const Home = () => {
  const { data } = useFetchData();

  return (
    <>
      <Banner></Banner>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Books</h1>
        <div className="  grid  sm:grid-cols-1 lg:grid-cols-3 gap-10">
          {data.map((item) => (
            <BookCards key={item.bookId} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
