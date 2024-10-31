import ReactDOM from "react-dom/client";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


import { Provider  } from 'react-redux';
import { store } from './store/store';
import AdminPanel from "./pages/AdminPanel";
import AllProducts from "./pages/AllProducts";
import AllUsers from "./pages/AllUsers";
import Home from "./pages/Home";
import CategoryProduct from "./pages/CategoryProduct";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";


const router = createBrowserRouter([
  {
    
    path: "/",
    element: <Layout />,

    children: [
      {
        path : "",
        element : <Home/>
    },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path : "product-category/:categoryName",
        element : <CategoryProduct/>
    },
    {
      path : "product/:id",
      element : <ProductDetails/>
  },
  {
    path : 'cart',
    element : <Cart/>
},
      
      {
        path : "admin-panel",
        element : <AdminPanel/>,
        children : [
          {
              path : "all-users",
              element : <AllUsers/>
          },
          {
              path : "all-products",
              element : <AllProducts/>
          }
      ]
      },
    ],

  },

  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Provider store={store}>
<RouterProvider router={router} />
</Provider>
);

