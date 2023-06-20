import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectTo = "/login", children }) => {
  const isAllowed = localStorage.getItem("token");
  // validate if is allowed, if is a user or not and if it has permission or not.
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  // if arrive one children, return this children, else if arrive a lot of childrens, return <Outlet />
  return children ? children : <Outlet />;
};
