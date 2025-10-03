import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, role }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/login" replace />;

  // If role prop is given (like "admin"), restrict
  if (role && user.role !== role) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
