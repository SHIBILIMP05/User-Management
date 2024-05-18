import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface LogOutAuth {
  children: ReactNode;
}

export default function LogOutAuth({ children }: LogOutAuth) {
  const token = Boolean(localStorage.getItem("token"));
  return token ? <Navigate to="/" /> : children;
}
