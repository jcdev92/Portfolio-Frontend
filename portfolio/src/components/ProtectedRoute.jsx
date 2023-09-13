/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../hooks/useProfile";

export const ProtectedRoute = ({ redirectTo = "/login", children }) => {
  const [isAllowed, setIsAllowed] = useState(true);

  // check if the token is expired or not
  useEffect(() => {
    getProfile()
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
  }, []);

  // check every 5 hours, if the token is expired or not
  useEffect(() => {
    const interval = setInterval(() => {
      getProfile()
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
    }, 1000 * 60 * 60 * 5);
    return () => clearInterval(interval);
  }, []);

  // validate if the token is expired or not
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  // if arrive one children, return this children, else if arrive a lot of childrens, return <Outlet />
  return children ? children : <Outlet />;
};
