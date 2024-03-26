import { useEffect, useState } from "react";
import { getBooks } from "../Utils/localStorage";
import ListedBooksCard from "./ListedBooksCard";

const ReadBooks = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    const key1 = "readBook";
    const savedBooks = getBooks(key1);
    setBooks(savedBooks);
  }, []);
  //soter

  return (
    <>
      {books?.map((book) => (
        <ListedBooksCard key={book.bookId} book={book} />
      ))}
    </>
  );
};

export default ReadBooks;
