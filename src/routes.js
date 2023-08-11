import React, { createRef } from "react";
import Home from "./components/Home";

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    nodeRef: createRef(),
  },
];

export default routes;
