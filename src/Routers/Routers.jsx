import { createBrowserRouter } from "react-router-dom";
import BookDetails from "../Component/BookDetails";
import ReadBooks from "../Component/ReadBooks";
import Wishlist from "../Component/Wishlist";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>opps error </div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/card/:cardId",
        element: <BookDetails />,
      },
      {
        path: "/listed-book",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBooks />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      },
    ],
  },
]);

export default router;
