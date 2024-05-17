import { useState } from "react";
import { signup } from "../APIs/userApi";
import { toast } from "sonner";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const emailPattern: RegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

  const submitHandle = async () => {
    try {
      if (name.length < 4) {
        return toast.error("Name should be atleast 4 character !");
      } else if (name.startsWith(" ")) {
        return toast.error("Name can't start with space !");
      } else if (email.startsWith(" ") || !email || !emailPattern.test(email)) {
        return toast.error("Please enter a valid email !");
      } else if (password.startsWith(" ")) {
        return toast.error("Password can't start with space !");
      } else if (password.length < 6) {
        return toast.error("Password should be atleast 6 character !");
      } else if (confirmPassword !== password) {
        return toast.error("Please confirm your password correctly !");
      }
      const status = await signup({
        name,
        email,
        password,
        confirmPassword,
      });
      console.log("status", status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen bg-C2 h-screen flex justify-center items-center">
      <div className=" bg-C3 w-[500px] h-[675px]  flex justify-center items-center">
        <div className="w-[500px] h-[675px] py-6 flex flex-col  items-center justify-between bg-C2 rounded-tl-full rounded-br-full ">
          <div className=" font-bold-sm font-font11 text-C1 text-5xl w-auto h-auto">
            Signup
          </div>
          <div className=" font-font11 text-xl font-semibold flex relative bottom-1 flex-col gap-y-3 justify-center w-auto h-auto">
            <label className="text-C1">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-10 w-64 rounded-tl-xl rounded-br-xl"
              type="text"
              name="name"
            />
            <label className="text-C1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 w-64 rounded-tl-xl rounded-br-xl"
              type="text"
              name="email"
            />
            <label className="text-C1">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-10 w-64 rounded-tl-xl rounded-br-xl"
              type="password"
              name="password"
            />
            <label className="text-C1">Confirm Password</label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirm(e.target.value)}
              className="h-10 w-64 rounded-tl-xl rounded-br-xl"
              type="password"
              name="cnfPassword"
            />
          </div>
          <div className=" w-auto h-auto">
            <input
              onClick={submitHandle}
              className=" bg-C1 text-C3 w-60 h-10 rounded-bl-xl rounded-tr-xl text-center"
              type="button"
              value="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
