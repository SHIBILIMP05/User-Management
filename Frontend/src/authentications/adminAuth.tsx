import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface child {
  children: ReactNode;
}

export default function AdminAuth({ children }: child) {
  const adminToken = Boolean(localStorage.getItem("adminToken"));
  return adminToken ? children  : <Navigate to="/login" />;
}
