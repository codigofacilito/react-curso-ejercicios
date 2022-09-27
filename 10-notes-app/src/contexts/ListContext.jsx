import { createContext } from "react";
import useList from "../hooks/useList";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const { list, add, remove, clear } = useList();

  return (
    <ListContext.Provider value={{ list, add, remove, clear }}>
      {children}
    </ListContext.Provider>
  );
}
