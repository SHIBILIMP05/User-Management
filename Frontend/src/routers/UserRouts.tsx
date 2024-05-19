import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login.tsx";
import { Signup } from "../Components/Signup.tsx";
import { Home } from "../Components/Home.tsx";
import LogAuth from "../authentications/userLoginAuth.tsx";
import LogOutAuth from "../authentications/logOutAuth.tsx";
import Profile from "../Components/Profile.tsx";

export const UserRouts = () => {
  return (
    
      <Routes> 
        <Route path="/" element={<LogAuth > <Home /> </LogAuth>} />
        <Route path="/profile" element={<LogAuth > <Profile /> </LogAuth>} />
        <Route path="/login" element={<LogOutAuth> <Login /> </LogOutAuth>} />
        <Route path="/signup" element={<LogOutAuth> <Signup /> </LogOutAuth>}/>
      </Routes>
   
  );
};
