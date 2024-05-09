/* eslint-disable react/prop-types */
import { checkToken } from "../hooks/useFetch";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginStateStore } from "../store/useStore";

export const ProtectedRoute = ({ redirectTo = "/login", children }) => {
  const [isAllowed, setIsAllowed] = useState(true);

  // check if the token is expired or not
  useEffect(() => {
    checkToken()
      .then((res) => {
        if (res.data) {
          setIsAllowed(true);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          loginStateStore.setState({
            message: err.response
          })
          setIsAllowed(false);
        }
      });
  }, []);

  // validate if the token is expired or not
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  // i want to show the error message in the login component


  // if arrive one children, return this children, else if arrive a lot of childrens, return <Outlet />
  return children ? children : <Outlet />;
};
