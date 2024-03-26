import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  // //sort
  // const [books, setBooks] = useState([]);

  // const [sortBy, setSortBy] = useState(null); // State to manage the selected sorting option
  // useEffect(() => {
  //   const key1 = "readBook";
  //   const savedBooks = getBooks(key1);
  //   setBooks(savedBooks);
  // }, []);
  // // Function to sort books based on the selected option

  // const sortBooks = (books, sortBy) => {
  //   if (sortBy === "rating") {
  //     return [...books].sort((a, b) => b.rating - a.rating);
  //   } else if (sortBy === "totalPages") {
  //     return [...books].sort((a, b) => b.totalPages - a.totalPages);
  //   } else if (sortBy === "yearOfPublishing") {
  //     return [...books].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
  //   }
  //   return books;
  // };
  // const handleSortChange = (event) => {
  //   setSortBy(event.target.value); // Update the selected sorting option
  // };
  // const sortedBooks = sortBooks(books, sortBy);
  //value={sortBy} onChange={handleSortChange}
  return (
    <div className="text-center">
      <p> Books</p>
      <select className="m-1 btn">
        <option value="">Sort By</option>
        <option value="rating">Rating</option>
        <option value="totalPages">Number of Pages</option>
        <option value="yearOfPublishing">Publisher Year</option>
      </select>
      <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
        <Link
          to={``}
          onClick={() => setTabIndex(0)}
          className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          }  `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Books</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          }  `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ListedBooks;
