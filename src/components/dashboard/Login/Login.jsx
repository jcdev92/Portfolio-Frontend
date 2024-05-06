"use client";
import { api } from "../../../hooks/url"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Loading } from "../../Loading";
import Form from "./Form";

export const Login = () => {
  const url = api
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    const { email, password } = data;
    setLoading(true);
    axios
      .post(`${url}/api/v1/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        setLoading(false);
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        setLoading(false);
        // detail me the error
        console.log(err.response.data);  
        // set the error
        err.response.status === 401 && setError(err.response);
      });
  };

  return (
    <div className=" flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-800 to-indigo-900 text-white font-mono">
      {loading ? (
        <Loading />
      ) : (
        <Form data={onSubmit} error={error}/>
      )}  
      
    </div>
  );
};
