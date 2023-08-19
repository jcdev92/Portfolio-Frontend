import useStatusStore from "../../../store/useStatusStore";
import { getSocialMedia } from "../../../hooks/useSocilaMedia";
import { useQuery } from "@tanstack/react-query";

export const SocialMedia = () => {
  useStatusStore.getState().setSuccess(null);
  useStatusStore.getState().setError(null);

  // working data importation from api deactivated while finishing other components
  const { data } = useQuery({ key: "socialMedia", queryFn: getSocialMedia });
  console.log(data);

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
      <h1>Social Media</h1>
    </div>
  );
};
