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
import SearchProduct from "./pages/SearchProduct";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import OrderPage from "./pages/OrderPage";


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
        path : "product-category",
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
  path : "search",
  element : <SearchProduct/>
},
{
  path : 'success',
  element : <Success/>
},
{
  path : "cancel",
  element : <Cancel/>
},
{
  path : 'order',
  element : <OrderPage/>
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

