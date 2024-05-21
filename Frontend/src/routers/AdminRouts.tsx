import {Route,Routes } from "react-router-dom"
import Admin from "../Components/Admin"


const AdminRouts = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<Admin/>}/>
    </Routes>
  )
}

export default AdminRouts