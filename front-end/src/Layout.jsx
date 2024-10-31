import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import SummaryApi from "./common/Api";
import { useEffect, useState } from "react";
import Context from './context';
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import { useCallback } from "react";


const Layout = () => {
  const dispatch = useDispatch()
  const [cartProductCount,setCartProductCount] = useState(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchUserDetails = useCallback(async()=>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : 'include'
    },[])

    const dataApi = await dataResponse.json()
    dispatch(setUserDetails(dataApi))
  })

  const fetchUserAddToCart = async()=>{
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url,{
      method : SummaryApi.addToCartProductCount.method,
      credentials : 'include'
    })

    const dataApi = await dataResponse.json()

    setCartProductCount(dataApi?.data?.count)
  }

  useEffect(()=>{
    /**user Details */
    fetchUserDetails()
    /**user Details cart product */
    fetchUserAddToCart()

  },[fetchUserDetails])

  return (
    <>
    <div className='main '>
    <Context.Provider value={{
          fetchUserDetails, // user detail fetch 
          cartProductCount, // current user add to cart product count,
          fetchUserAddToCart

      }}>
        <ToastContainer 
          position='top-center'
        />
        
        <Header/>

        <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet/>
        </main>
        <div className="footer ">

        <Footer/>
        </div>
      </Context.Provider>
    </div>
    </>

  );
};

export default Layout;
