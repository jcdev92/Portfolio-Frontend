/* eslint-disable react/prop-types */
import { ErrorAlert } from "../../Alerts/ErrorAlert";
import { FaM } from "react-icons/fa6";
import { AiFillLock } from "react-icons/ai";
import { Button, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { loginStateStore } from "../../../store/useStore";

const Form = ({data, error}) => {
    const { register, handleSubmit } = useForm();
    const loginState = loginStateStore((state) => state.message);

  return (
    <form
    className="flex max-w-md flex-col gap-4 lg:w-96 font-sans"
    onSubmit={handleSubmit(data)}
  >
    <div className="flex flex-col items-center gap-2 mb-8">
      <h1 className="text-4xl font-bebas drop-shadow-lg">JC DEV PANEL</h1>
      <h1 className="text-4xl font-bebas drop-shadow-lg">LOGIN</h1>
    </div>
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
    {error ? <ErrorAlert error={error} /> : loginState ? <ErrorAlert error={loginState}/> : null}
  </form>
  )
}

export default Form