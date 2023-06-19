import { useForm } from "react-hook-form";

export const Login = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input type="text" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
