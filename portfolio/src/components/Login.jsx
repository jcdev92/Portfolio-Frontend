"use client";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from "axios";
import { FaM } from "react-icons/fa6";
import { AiFillLock } from "react-icons/ai";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
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
      .catch((err) => console.log(err));
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
      <form
        className="flex max-w-md flex-col gap-4 lg:w-96"
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
            id="password1"
            required
            type="password"
            placeholder="Password"
            className="w-full"
            {...register("password", { required: true })}
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};
