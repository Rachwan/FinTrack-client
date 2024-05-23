import React from "react";
import { Navigate, Outlet } from "react-router-dom";
function ProtectedRoutes({ isAllowed, children, loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!isAllowed && !loading) {
    return <Navigate to={"/login"} />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoutes;
