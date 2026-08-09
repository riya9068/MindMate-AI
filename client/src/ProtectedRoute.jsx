import { Navigate } from "react-router-dom";
import { useConvexAuth } from "convex/react";
// import ProtectedRoute from "./ProtectedRoute";
export default function ProtectedRoute({ children }) {

  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return isAuthenticated
    ? children
    : <Navigate to="/login" replace />;
}