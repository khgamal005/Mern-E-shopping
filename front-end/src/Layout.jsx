import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import SummaryApi from "./common/Api";
import { useEffect } from "react";
import Context from './context';
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";


const Layout = () => {
  const dispatch = useDispatch()

  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : 'include'
    })

    const dataApi = await dataResponse.json()
    dispatch(setUserDetails(dataApi))
  }

  useEffect(()=>{
    /**user Details */
    fetchUserDetails()
    /**user Details cart product */


  },[])

  return (
    <>
    <div className='main '>
    <Context.Provider value={{
          fetchUserDetails, // user detail fetch 

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
