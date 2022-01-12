import React, {
  useEffect,
  createContext,
  useContext,
  useState,
  useMemo,
} from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { collectIdsAndDocs } from "../shared/utilities";
import { db } from "../shared/firebase";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setUsers(querySnapshot.docs.map((doc) => collectIdsAndDocs(doc)));
    });
    return () => unsubscribe;
  }, []);

  console.log("users: ", users);

  const payload = useMemo(() => ({ users }), [users]);
  return (
    <UserContext.Provider value={payload}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
