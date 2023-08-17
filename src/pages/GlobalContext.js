import { createContext, useContext } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const globalAttributes = {
    // Your global attributes data here
    title: 'My App',
    description: 'A description of my app',
    // ...other attributes...
  };

  return (
    <GlobalContext.Provider value={globalAttributes}>
      {children}
    </GlobalContext.Provider>
  );
};
