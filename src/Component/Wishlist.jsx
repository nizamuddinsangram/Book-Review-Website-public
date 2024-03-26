import { useEffect, useState } from "react";
import { getBooks } from "../Utils/localStorage";
import ListedBooksCard from "./ListedBooksCard";

const Wishlist = () => {
  const [wishlists, setWishlist] = useState();
  useEffect(() => {
    const key2 = "wishlist";
    const savedWishlist = getBooks(key2);
    setWishlist(savedWishlist);
  }, []);
  return (
    <div>
      {wishlists?.map((wishlist) => (
        <ListedBooksCard key={wishlist?.bookId} book={wishlist} />
      ))}
    </div>
  );
};

export default Wishlist;
