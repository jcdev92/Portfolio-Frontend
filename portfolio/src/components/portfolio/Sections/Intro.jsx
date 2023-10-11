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
    <div className="flex flex-col h-screen md:grid md:grid-cols-1 md:gap-4 lg:grid-cols-3 lg:gap-8 md:h-full p-2">
      <div className="order-2 md:order-1 md:flex md:flex-col md:items-center md:justify-center md:h-full rounded-lg p-2">
        <img src={profile?.bioImage} alt="bioImage" />
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg lg:col-span-2 p-2 gap-2  md:overflow-hidden">
        <span className="font-bold text-center text-yellow-300">
          <Typewriter
            options={{
              strings: `Welcome to my Portfolio! my name is ${profile?.firstName} ${profile?.lastName}.`,
              autoStart: true,
              loop: false,
              delay: 40,
            }}
          />
        </span>{" "}
        <br />
        <p className="w-3/4 overflow-y-auto text-sm text-gray-400">
          <Typewriter
            options={{
              strings: profile?.aboutMe,
              autoStart: true,
              loop: false,
              delay: 20,
            }}
          />
        </p>
        <br />
        <span className="hidden md:flex font-bold text-center text-yellow-300">
          <Typewriter
            options={{
              strings: `Biography:`,
              autoStart: true,
              loop: false,
              delay: 40,
            }}
          />{" "}
        </span>{" "}
        <br />
        <p className="hidden md:flex w-3/4 text-sm text-gray-400">
          <Typewriter
            options={{
              strings: profile?.biography,
              autoStart: true,
              loop: false,
              delay: 20,
            }}
          />
        </p>
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
