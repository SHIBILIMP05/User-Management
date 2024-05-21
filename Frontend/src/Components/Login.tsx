import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../APIs/userApi";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../redux/slice/userSlice";
import { RootState } from "../redux/store";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.User);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailPattern: RegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

  const handleLogin = async () => {
    try {
      if (!email || email.startsWith(" ") || !emailPattern.test(email)) {
        return toast.error("Please enter a valid email !");
      } else if (!password) {
        return toast.error("Please enter the password !");
      }
      const status = await login({
        email: email,
        password: password,
      });

      const response = status.userData;

      if (status.verify) {
        return toast.error(
          "You don't hav an account, please register your account !"
        );
      } else if (status.invalid) {
        return toast.error("Please enter a valid password !");
      } else if (status.admin) {
       return navigate("/admin/dashboard");
      } else {
        localStorage.setItem("token", status.token);

        dispatch(
          userDetails({
            name: response.name,
            email: response.email,
            is_admin: response.is_admin,
            id: response._id,
            phone: response.phone,
            location: response.location,
            image: response.image,
          })
        );

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 w-64 rounded-tl-xl rounded-br-xl"
              type="text"
              name="email"
            />
            <label className="text-C1">Passwrod</label>
            <input
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
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
              type="submit"
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
