import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [mock, setMock] = useState(false);

  return <AppContext.Provider value={{mock, setMock}}>
    {children}
    </AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);