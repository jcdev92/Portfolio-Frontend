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
      <div className="loader2"></div>
    </div>
  ) : isSuccess ? (
    <div className="flex flex-col h-full text-odp-text font-mono border">
      <div className="flex flex-col h-[50%] w-full border items-center justify-center gap-4">
        <div className="flex items-center w-full h-full border">
          <div className="flex w-1/3 h-5/6 p-2">
            <div
              className="relative h-full w-full border items-center justify-center"
              href="#"
            >
              <img
                className="absolute border-4 border-double rounded-full z-10 hover:z-0 h-3/5 w-2/6 hover:scale-90 hover:rotateX-180 hover:shadow-none tansition-all ease-in-out duration-300 hover:cursor-pointer shadow-gray-700 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                src={profile?.profileImg}
                alt="profileImg"
              />
              <span className="absolute flex border-4 border-double rounded-full bg-red-600 text-white z-0 hover:z-10 uppercase w-2/6 h-3/5 items-center justify-center hover:scale-90 hover:cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                resume
              </span>
            </div>
          </div>
          <div className="flex h-full w-2/3 text-2xl items-center justify-center border flex-col p-2 text-yellow-300">
            <h1>{profile?.firstName}</h1>
            <h1>{profile?.lastName}</h1>
            <div className="flex flex-col justify-center items-center p-2 text-blue-500 border">
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
              <p className="text-red-500">{profile?.country}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[50%] items-center justify-center">
        <span className="flex w-2/3">
          <Typewriter
            options={{
              strings: profile?.aboutMe,
              autoStart: true,
              delay: 50,
            }}
          />
        </span>
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
