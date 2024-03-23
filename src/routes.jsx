import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Shop, { loader as shopLoader } from "./pages/Shop/Shop.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import ItemDescription, {
  loader as itemLoader,
} from "./pages/ItemDescription/ItemDescription.jsx";
import Error from "./pages/Error/Error.jsx";

// const routes = createRoutesFromElements(
//   <Route path="/" element={<App />} errorElement={<Error />}>
//     <Route errorElement={<Error />}>
//       <Route element={<Home />} index={true} />
//       <Route path="/shop" element={<Shop />} loader={shopLoader} />
//       <Route
//         path="/shop/:itemId"
//         element={<ItemDescription />}
//         loader={itemLoader}
//       />
//       <Route path="/cart" element={<Cart />} />
//     </Route>
//   </Route>
// );

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
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
    ],
  },
];

export default routes;
