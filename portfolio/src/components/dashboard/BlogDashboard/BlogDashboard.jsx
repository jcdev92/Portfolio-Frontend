import useStatusStore from "../../../store/useStatusStore";

export const BlogDashboard = () => {
  useStatusStore.getState().setSuccess(null);
  useStatusStore.getState().setError(null);
  return (
    <div
      className="
  flex
  flex-col
  w-full
  bg-transparent
  h-screen
  items-center
  justify-center
  text-white
  text-4xl
"
    >
      <h1>Blog</h1>
    </div>
  );
};
