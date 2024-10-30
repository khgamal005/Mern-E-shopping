import { Link, useNavigate } from "react-router-dom";
import logo from "../assest/khaled.png";
import { GrSearch } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from "react";
import ROLE from "../common/role";
import SummaryApi from "../common/Api";
import axios from "axios";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const { user } = useSelector((state) => state.user);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = async () => {
    axios.defaults.withCredentials = true;
    const data = await axios.get(SummaryApi.logout_user.url);
    if (data) {
      toast.success(data.data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    } else {
      toast.success(data.data.message);
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

        <div className="search hidden md:flex items-center w-full max-w-sm justify-between border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none"
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
                </nav>
              </div>
            )}
            
           <div className="cart">
             {
                     user?.data?._id && (
                      <Link to={"/cart"} className='text-2xl relative'>
                          <span><FaShoppingCart/></span>
      
                          <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                              <p className='text-sm'>0</p>
                          </div>
                      </Link>
                      )
                  }
           </div>
          </div>

          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/login"}
                className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
