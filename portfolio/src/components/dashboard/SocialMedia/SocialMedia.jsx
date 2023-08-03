import useStatusStore from "../../../store/useStatusStore";

export const SocialMedia = () => {
  useStatusStore.getState().setSuccess(null);
  useStatusStore.getState().setError(null);
  return <div className="
    flex
    flex-col
    w-full
    bg-transparent
    h-screen
    items-center
    justify-center
    text-white
    text-4xl
  ">
    <h1>Social Media</h1>
  </div>;
};
