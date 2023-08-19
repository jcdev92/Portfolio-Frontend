"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, TextInput } from "flowbite-react";
import axios from "axios";
import { ErrorAlert } from "./dashboard/Alerts/ErrorAlert";
import { FaM } from "react-icons/fa6";
import { AiFillLock } from "react-icons/ai";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const onSubmit = (data) => {
    const { email, password } = data;
    axios
      .post("http://localhost:9000/api/v1/auth/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        // detail me the error
        console.log(err.response.data);
        // set the error
        err.response.status === 401 && setErr(err.response.status);
      });
  };

  return (
    <div
      className="
    flex
    flex-col
    justify-center
    items-center
    h-screen
    bg-gradient-to-r
    from-blue-800
    to-indigo-950
    text-white
    font-mono
    "
    >
      <div className="flex flex-col items-center gap-2 mb-8">
        <h1 className="text-4xl font-bebas drop-shadow-lg">JC DEV PANEL</h1>
        <h1 className="text-4xl font-bebas drop-shadow-lg">LOGIN</h1>
      </div>
      <form
        className="flex max-w-md flex-col gap-4 lg:w-96 font-sans"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row items-center gap-2">
          <FaM />
          <TextInput
            id="email1"
            placeholder="email"
            required
            type="email"
            className="w-full"
            {...register("email", { required: true })}
          />
        </div>
        <div className="flex flex-row items-center gap-2">
          <AiFillLock />
          <TextInput
            id="password"
            required
            type="password"
            placeholder="Password"
            className="w-full"
            {...register("password", { required: true })}
          />
        </div>
        <Button type="submit">Login</Button>
        {err && <ErrorAlert error={err} />}
      </form>
    </div>
  );
};
