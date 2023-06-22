import { Navigate, Outlet } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export const ProtectedRoute = ({ redirectTo = "/login", children }) => {
  const token = localStorage.getItem("token");
  const [notAllowed, setNotAllowed] = useState(false);
  // check if the token is expired
  axios
    .get("http://localhost:9000/api/v1/user/me", {
      headers: {
        Authorization: `jwt ${token}`,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
      setNotAllowed(true);
    });

  // validate if is allowed, if is a user or not and if it has permission or not.
  if (!token || notAllowed) {
    return <Navigate to={redirectTo} />;
  }

  // if arrive one children, return this children, else if arrive a lot of childrens, return <Outlet />
  return children ? children : <Outlet />;
};
