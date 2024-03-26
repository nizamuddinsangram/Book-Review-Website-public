import toast from "react-hot-toast";

export const getBooks = (key) => {
  let books = [];
  const storedBooks = localStorage.getItem(key);
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

export const saveBook = (key, book) => {
  let books = getBooks(key);
  const isExist = books?.find((b) => b.bookId === book.bookId);
  console.log(isExist);
  console.log(book);
  if (isExist) {
    return toast.error("Book already exists");
  }
  books.push(book);
  localStorage.setItem(key, JSON.stringify(books));
  toast.success("Blog Bookmarked Successfully!");
};
