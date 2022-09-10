import {
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import {
  UserCredential,
  User,
  onAuthStateChanged,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../config/firebaseAuth";

interface userState {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  signInGoogle: () => Promise<UserCredential> | void;
  signOut: () => Promise<void> | void;
}

const initialUserState: userState = {
  user: null,
  setUser: () => {},
  loading: true,
  setLoading: () => {},
  signInGoogle: () => {},
  signOut: () => {},
};

export const AuthContext = createContext(initialUserState);

export const useAuth = (): userState => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("No existe proveedor para autenticación");

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  });

  const signInGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const signOut = () => firebaseSignOut(auth);

  return {
    user,
    setUser,
    loading,
    setLoading,
    signInGoogle,
    signOut,
  };
};
