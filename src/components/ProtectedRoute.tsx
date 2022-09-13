import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth/authContext";
import { IProps } from "../utils/models";

export function ProtectedRoute({ children }: IProps) {
  const { user, loading } = useAuth();

  if (loading) return <h1>loading</h1>;

  if (!user) return <Navigate to={"/login"} />;

  return <>{children}</>;
}
