import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface LogAuth {
  children: ReactNode;
}

export default function LogAuth({ children }: LogAuth) {
  const token = Boolean(localStorage.getItem("token"));
  return token ? children : <Navigate to="/login" />;
}
