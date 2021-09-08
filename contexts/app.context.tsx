import { createContext, useContext, useState } from "react";

type AppState = {
  isAutorized: boolean;
};

interface AppContext {
  state: AppState;
  setState: (state: AppState) => void;
  updateState: (state: Partial<AppState>) => void;
}

const defaultAppState: AppState = {
  isAutorized: false,
};

const AppContext = createContext({} as AppContext);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export const AppContextProvider = (props) => {
  const [state, setState] = useState<AppState>(defaultAppState);

  const updateState = (newState: Partial<AppState>) => {
    setState({ ...state, ...newState });
  };

  return (
    <AppContext.Provider value={{ state, setState, updateState }} {...props} />
  );
};
