import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import BookDetails from "./components/BookDetails";
import Books from "./components/Books";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/books",
        loader: () => fetch("https://api.itbook.store/1.0/new"),
        element: <Books />,
      },
      {
        path: "/book/:bookId",
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.bookId}`),
        element: <BookDetails />,
      },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
