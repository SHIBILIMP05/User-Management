import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface child {
  children: ReactNode;
}

export default function AdminLogOutAuth({ children }: child) {
  const adminToken = Boolean(localStorage.getItem("adminToken"));
  return adminToken ? <Navigate to="/admin/dashboard" /> : children;
}
