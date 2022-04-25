import React, { useContext } from "react";
import { useCart } from "./useCart";

const AppContext = React.createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const { count, cart, onSaveToCart } = useCart();

  return (
    <AppContext.Provider value={{ count, cart, onSaveToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
