import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Shop, { loader as shopLoader } from "./pages/Shop/Shop.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import ItemDescription, {
  loader as itemLoader,
} from "./pages/ItemDescription/ItemDescription.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: shopLoader,
      },
      {
        path: "/shop/:itemId",
        element: <ItemDescription />,
        loader: itemLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
