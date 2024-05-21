import {Route,Routes } from "react-router-dom"
import Admin from "../Components/Admin"
import AdminAuth from "../authentications/adminAuth"
import Login from "../Components/Login"
import AdminLogOutAuth from "../authentications/adminLogOutAuth"


const AdminRouts = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<AdminAuth> <Admin/> </AdminAuth>}/>
        <Route path="/adminLogin" element={<AdminLogOutAuth> <Login/> </AdminLogOutAuth>}/>

    </Routes>
  )
}

export default AdminRouts