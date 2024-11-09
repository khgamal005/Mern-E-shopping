import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assest/khaled.png";
import { GrSearch } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { useContext, useState } from "react";
import ROLE from "../common/role";
import SummaryApi from "../common/Api";
// import axios from "axios";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import { FaShoppingCart } from "react-icons/fa";
import Context from "../context";

function Header() {
  const { user } = useSelector((state) => state.user);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const context = useContext(Context)
  const searchInput = useLocation()
  const URLSearch = new URLSearchParams(searchInput?.search)
  const searchQuery = URLSearch.getAll("q")
  const [search,setSearch] = useState(searchQuery)

  // console.log( searchQuery ,URLSearch)
  
    const handleSearch = (e)=>{
      const { value } = e.target
      setSearch(value)
  
      if(value){
        navigate(`/search?q=${value}`)
      }else{
        navigate("/search")
      }
    }
  const handleLogout = async () => {
    // axios.defaults.withCredentials = true;
    // const data = await axios.get(SummaryApi.logout_user.url);
    // if (data) {
    //   toast.success(data.data.message);
    //   dispatch(setUserDetails(null));
    //   navigate("/");
    // } else {
    //   toast.success(data.data.message);
    // }

    const fetchData = await fetch(SummaryApi.logout_user.url,{
      method : SummaryApi.logout_user.method,
      credentials : 'include'
    })

    const data = await fetchData.json()

    if(data.success){
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if(data.error){
      toast.error(data.message)
    }


  };





  return (
    <header className="header h-16 shadow-md bg-white fixed w-full z-40">
      <div className=" h-full  mx-auto flex items-center px-4 justify-between">
        <div className="logo ">
          <Link to={"/"}>
            <img src={logo} alt="" className="h-12" />
          </Link>
        </div>

        <div className="search  md:flex items-center w-full max-w-sm justify-between border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none"
            onChange={handleSearch} value={search}
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="relative flex justify-cente items-center gap-1">
            {user && (
              <div
                className="text-3xl cursor-pointer relative flex justify-center"
                onClick={() => setMenuDisplay((preve) => !preve)}
              >
                {user?.data?.profilePic? (
                  <img
                    src={user?.data?.profilePic}
                    className="w-10 h-10 rounded-full"
                   alt=""
                  />
                ) : (
                  <FaRegCircleUser />
               
                )}
              </div>
            )}

            {menuDisplay && (
              <div className="absolute w-full bg-slate-200 bottom-0 top-11 h-fit p-2 shadow-lg rounded">
                <nav>
                  {user?.data?.role === ROLE.ADMIN && (
                    <Link
                      to={"/admin-panel/all-products"}
                      className="whitespace  md:block hover:bg-slate-100 p-2"
                      onClick={() => setMenuDisplay((preve) => !preve)}
                    >
                      Admin Panel
                    </Link>
                  )}
                <Link to={'/order'} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>Order</Link>

                </nav>
              </div>
            )}
            

             {
                     user?.data?._id && (
                      <Link to={"/cart"} className='text-2xl relative'>
                          <span><FaShoppingCart/></span>
      
                          <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                              <p className='text-sm'>{context?.cartProductCount}</p>
                          </div>
                      </Link>
                      )
                  }
 
          </div>

          <div>
          {
              user  ? (
                      <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Logout</button>
                    )
                    : (
                    <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</Link>
                    )
               }
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
