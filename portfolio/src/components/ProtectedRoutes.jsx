import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({
  children,
  isAuthenticated,
  redirectTo = "/login",
}) => {
  return isAuthenticated ? (
    children ? (
      children
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to={redirectTo} replace={true} />
  );
};
