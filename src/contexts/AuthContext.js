import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../shared/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("user: ", user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const login = (email, password) => {
    setLoading(true);

    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          resolve();
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  };

  const logout = () => {
    signOut(auth);
  };

  const payload = useMemo(
    () => ({ user, loading, login, logout }),
    [user, loading]
  );
  return (
    <AuthContext.Provider value={payload}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
