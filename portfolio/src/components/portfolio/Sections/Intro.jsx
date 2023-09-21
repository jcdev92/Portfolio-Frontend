import useProfileStore from "../../../store/useProfileStore";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../../hooks/useProfile";

export const Intro = () => {
  const {
    data: profile,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    onSuccess: (data) => {
      useProfileStore.getState().setProfile(data);
    },
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return isLoading ? (
    <div className="flex h-full w-full items-center justify-center">
      <div className="loader"></div>
    </div>
  ) : isSuccess ? (
    <div className="flex h-full text-odp-text font-mono">
      <div className="border">
        <img
          className="w-[10%]"
          style={{ borderRadius: "50%" }}
          src={profile?.profileImg}
          alt="profileImg"
        />
        <h1>
          {profile?.firstName} {profile?.lastName}
        </h1>
        <p>{profile?.jobTitle}</p>
        <p>{profile?.country}</p>
      </div>
      <p>{profile?.aboutMe}</p>
    </div>
  ) : (
    isError && (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-4xl text-red-700 font-bebas">{error}</span>
      </div>
    )
  );
};
