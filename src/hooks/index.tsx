import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "../assets/styles/global";
import { GProvider } from "./context";

const AppProvider: React.FC = ({ children }) => (
  <BrowserRouter>
    <GProvider>
      {children}
      <GlobalStyle />
    </GProvider>
  </BrowserRouter>
);

export default AppProvider;
