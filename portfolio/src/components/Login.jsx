"use client";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from "axios";

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
        navigate("/dashboard/profile");
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
    from-green-400
    to-blue-500
    text-white
    font-mono
    "
    >
      <form
        className="flex max-w-md flex-col gap-4 lg:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            placeholder="name@flowbite.com"
            required
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            required
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};
