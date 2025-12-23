import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../Home/HomePage";

const AppRouter = () => {
  const routes = useRoutes([{ path: "/", element: <HomePage></HomePage> }]);

  return <>{routes}</>;
};

export default AppRouter;

