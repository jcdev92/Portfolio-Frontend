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
    <div className="flex flex-col h-full w-full justify-center text-odp-text font-mono">
      <div className="flex text-2xl justify-center items-center flex-col p-2 text-yellow-300">
        <Typewriter
          options={{
            strings: profile?.firstName,
            autoStart: true,
            delay: 80,
          }}
        />
        <Typewriter
          options={{
            strings: profile?.lastName,
            autoStart: true,
            delay: 160,
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center p-2 text-blue-500">
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
        <p className="text-red-500">
          <Typewriter
            options={{
              strings: profile?.country,
              autoStart: true,
              delay: 200,
            }}
          />
        </p>
      </div>
      <div className="flex w-full justify-center items-center">
        <span className="w-2/3">
          <Typewriter
            options={{
              strings: profile?.aboutMe,
              autoStart: true,
              delay: 40,
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
