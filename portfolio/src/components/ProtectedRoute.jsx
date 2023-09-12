/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../hooks/useProfile";

export const ProtectedRoute = ({ redirectTo = "/login", children }) => {
  const [isAllowed, setIsAllowed] = useState(true);
  useQuery({
    queryKey: ["tokenValidate"],
    queryFn: getProfile,
    onSuccess: () => {
      setIsAllowed(true);
    },
    onError: () => {
      setIsAllowed(false);
    },
    staleTime: 18000000,
  });

  // validate if the token is expired or not
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  // if arrive one children, return this children, else if arrive a lot of childrens, return <Outlet />
  return children ? children : <Outlet />;
};
