import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import { Signup } from "../Components/Signup";

export const UserRouts = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
   
  );
};
