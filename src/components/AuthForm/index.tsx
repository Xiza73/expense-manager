import { useState } from "react";
import Button from "../BasicComponents/Button";
import Divider from "../BasicComponents/Divider";
import { images } from "../../utils/constants";
import { useAuth } from "../../context/auth/authContext";
import { useNavigate } from "react-router-dom";
import { errorHandler } from "../../config/firebaseAuth";
import { Alert } from "../BasicComponents/Alert";

type Props = {
  divider?: "circle" | "diamond";
};

export default function AuthForm({ divider = "circle" }: Props) {
  const { signInGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string>();

  const handleGoogleLogin = async () => {
    try {
      await signInGoogle();
      setError("");
      navigate("/");
    } catch (err: any) {
      setError(errorHandler(err.code));
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <div
        className="bg-strong-150 shadow-strong-100 shadow-md rounded-md px-8 pt-6 pb-8 mb-3
                    dark:bg-strong-d-200 dark:shadow-strong-d-150"
      >
        <div className="flex flex-col justify-center items-center">
          <img src={images.logo} alt="img" />
          <Divider type={divider} />
          <Button
            text="Ingresar con Google"
            onClick={handleGoogleLogin}
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}
