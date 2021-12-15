/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useMemo, useReducer } from "react";

import reducer from "./reducer";

interface IGlobalContext {
  loading: boolean;
  setLoad(load: boolean): void;
}

export const GlobalContext = createContext<IGlobalContext | undefined>(
  {} as IGlobalContext
);

interface Props {
  children: React.ReactNode;
}

const GProvider: React.FC<Props> = ({ children }) => {
  const initialState = {
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading } = state;

  const setLoad = (load: boolean): void => {
    dispatch({
      type: "IS_LOADING",
      payload: load,
    });
  };

  const gDataProvider = useMemo(
    () => ({
      loading,
      setLoad,
    }),
    [loading]
  );

  return (
    <GlobalContext.Provider value={gDataProvider}>
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobal(): IGlobalContext {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useUser must be used within an GlobalContext");
  }
  return context;
}

export { GProvider, useGlobal };
