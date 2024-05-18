import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../APIs/userApi";

const Login = () => {
  const navigate = useNavigate();

  const [email,setEmail] = useState('')
  const [password,setPassword]=useState('')
  
  const handleLogin = async()=>{
   const status = await login({
    email:email,
    password:password
   })
console.log(status);


  }

  return (
    <div className="w-screen bg-C2 h-screen flex justify-center items-center">
      <div className=" bg-C3 w-[425px] h-[550px]  flex justify-center items-center">
        <div className="w-[425px] h-[550px] py-6 flex flex-col  items-center justify-between bg-C2 rounded-tl-full rounded-br-full ">
          <div className=" font-bold-sm font-font11 text-C1 text-5xl w-auto h-auto">
            Login
          </div>
          <div className=" font-font11 text-xl font-semibold flex relative bottom-2 flex-col gap-y-3 justify-center w-auto h-auto">
            <label className="text-C1">Email</label>
            <input
            defaultValue={email}
            onChange={(e)=>setEmail(e.target.value)}
              className="h-10 w-64 rounded-tl-xl rounded-br-xl"
              type="text"
              name="email"
            />
            <label className="text-C1">Passwrod</label>
            <input
            defaultValue={password}
            onChange={(e)=>setPassword(e.target.value)}
              className="h-10 w-64 rounded-tl-xl rounded-br-xl"
              type="password"
              name="password"
            />
            <div className=" text-white w-auto h-auto flex flex-col items-center">
              <p className="text-[16px]">Don't have an account ? </p>
              <span
                onClick={() => navigate("/signup")}
                className="underline text-[16px]"
              >
                signup
              </span>
            </div>
          </div>

          <div className=" w-auto h-auto">
            <input
            onClick={handleLogin}
              className=" bg-C1 text-C3 w-60 h-10 rounded-bl-xl rounded-tr-xl text-center"
              value={"submit"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
