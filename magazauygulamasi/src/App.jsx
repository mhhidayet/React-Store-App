import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
const router = createBrowserRouter(
  [
    {
      path: "/", element: <Main />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        {
          path: "products",
          children: [
            { index: true, element: <Products /> },
            { path: ":id", element: <ProductDetails /> },
          ],
        },
        { path: "cart", element: <Cart /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ]
    },
  ]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App