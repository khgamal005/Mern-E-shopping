import { Link } from "react-router-dom";
import logo from "../assest/khaled.png"
import { GrSearch } from "react-icons/gr";





function Header() {
  return (
   
      <header className="header h-16 shadow-md bg-white fixed w-full z-40'">
        <div className=" h-full  mx-auto flex items-center px-4 justify-between">

        <div className="logo ">
        <Link to={"/"}>
          <img src={logo} alt="" className= "h-12"  />
        </Link>
        </div>

        <div className="search hidden md:flex items-center w-full max-w-sm justify-between border rounded-full focus-within:shadow pl-2">
          <input type="text" placeholder='search product here...' className='w-full outline-none' />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                  <GrSearch />
                </div>
        </div>

        <div className="login">
          <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</Link>
        </div>
        
        </div>
      </header>
  
  );
}

export default Header;
