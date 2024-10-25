import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common/Api";
import axios from "axios";
import { toast } from "react-toastify";
import Context from "../context";


function Login() {
  const navigate = useNavigate();
  const { fetchUserDetails} = useContext(Context)
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) =>{
    const { name , value } = e.target

    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
}


const handleSubmit = async (e) => {
  e.preventDefault()
  
  axios.defaults.withCredentials = true;

  const config = {
    header: "application/json",
  
  };
  const dataapi= await axios.post(SummaryApi.signIN.url,
    {
      email:data.email,
      password:data.password,
      
    },
    config,
    
  
  )
  
  if(dataapi.data.success==true){
    toast.success(dataapi.data.message)
    navigate("/")
    fetchUserDetails()
  }else {
    toast.error(dataapi.data.message)
  }
  
  
  }
  return (
    <section id="login">
      <div className="mx-auto container p-4 ">
        <div className="bg-slate-200 p-5 w-full max-w-sm mx-auto ">
          

          <form   onSubmit={handleSubmit} className="pt-6 flex flex-col gap-2">
            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.email}
                  className="w-full h-full outline-none bg-transparent"
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div>
              <label>Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  value={data.password}
                  name="password"
                  className=" w-full h-full outline-none bg-transparent"
                  onChange={handleOnChange}
      
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-red-600"
              >
                Forgot password ?
              </Link>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>

          <p className="my-5">
  
            you donot  have account  ?{" "}
            <Link
              to={"/sign-up"}
              className=" text-red-600 hover:text-red-700 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
