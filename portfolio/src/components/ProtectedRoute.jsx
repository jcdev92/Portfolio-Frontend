/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const ProtectedRoute = ({ redirectTo = "/login", children }) => {
  const token = localStorage.getItem("token");
  const [isAllowed, setIsAllowed] = useState(true);

  // check every 5 hours if the token is valid or not
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("https://portfolio-backend-3jrx-dev.fl0.io/api/v1/user/me", {
          headers: {
            Authorization: `jwt ${token}`,
          },
        })
        .then((res) => {
          if (res.data) {
            setIsAllowed(true);
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            setIsAllowed(false);
          }
        });
    }, 18000000);
    return () => clearInterval(interval);
  }, [token]);

  // validate if the token is expired or not
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  // if arrive one children, return this children, else if arrive a lot of childrens, return <Outlet />
  return children ? children : <Outlet />;
};
