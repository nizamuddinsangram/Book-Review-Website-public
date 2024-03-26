import { createBrowserRouter } from "react-router-dom";
import BookDetails from "../Component/BookDetails";
import ReadBooks from "../Component/ReadBooks";
import Wishlist from "../Component/Wishlist";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PageReadPage from "../Pages/PageToReadPage/PageReadPage";

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
        path: "/pages-read",
        element: <PageReadPage />,
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
