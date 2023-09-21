import useProfileStore from "../../../store/useProfileStore";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../../hooks/useProfile";
import Typewriter from "typewriter-effect";

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
    <div className="flex h-full w-full text-odp-text font-mono">
      <div className="flex flex-col w-[50%] items-center justify-center gap-4">
        <div className="flex items-center justify-center w-full h-2/6">
          <div className="flex w-1/4 justify-center items-center p-2">
            <img
              className=""
              style={{ borderRadius: "50%" }}
              src={profile?.profileImg}
              alt="profileImg"
            />
          </div>
          <div className="flex h-full text-2xl justify-center flex-col p-2">
            <h1>{profile?.firstName}</h1>
            <h1>{profile?.lastName}</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-2">
          <Typewriter
            options={{
              strings: [
                profile?.jobTitle,
                "Front-End Developer",
                "Back-End Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p>{profile?.country}</p>
        </div>
      </div>
      <div className="flex w-[50%] items-center justify-center">
        <span className="flex w-2/3">{profile?.aboutMe}</span>
      </div>
    </div>
  ) : (
    isError && (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-4xl text-red-700 font-bebas">{error}</span>
      </div>
    )
  );
};
