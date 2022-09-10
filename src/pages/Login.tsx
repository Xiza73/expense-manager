import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth/authContext";
import AuthForm from "../components/AuthForm";

export function Login() {
  const { user: currentUser } = useAuth();

  if (currentUser) return <Navigate to={"/"} />;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <AuthForm divider="diamond" />;
    </div>
  );
}
