import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";




const Layout = () => {
  return (
    <>
  <Header/>
        <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet/>
        </main>
        <Footer/>
    </>
  );
};

export default Layout;
