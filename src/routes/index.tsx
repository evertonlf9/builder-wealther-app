import React from "react";
import { Routes as RoutesDom, Route } from "react-router-dom";

import Home from "../pages/home";

const Routes: React.FC = () => (
  <RoutesDom>
    <Route path="/" element={<Home />} />
  </RoutesDom>
);

export default Routes;
