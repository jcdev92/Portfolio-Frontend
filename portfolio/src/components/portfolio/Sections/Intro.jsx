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
    <div className="flex h-full w-full text-odp-text font-mono">
      <div className="flex flex-col w-[50%] items-center justify-center gap-4">
        <div className="flex gap-4 items-center justify-center w-full h-2/6">
          <div className="relative flex w-1/4 h-5/6 justify-center items-center p-2 hover:scale-90 hover:rotateX-180 shadow-md hover:shadow-none tansition-all ease-in-out duration-200 hover:cursor-pointer shadow-gray-700 rounded-full">
            <img
              className="absolute border-4 border-double rounded-full z-10 hover:z-0 h-full"
              src={profile?.profileImg}
              alt="profileImg"
            />
            <div
              className="absolute flex border-4 border-double h-full w-full items-center justify-center rounded-full bg-red-600 text-white z-0 hover:z-10"
              href="#"
            >
              <span className="text-2xl uppercase">
                <a href="https://drive.google.com/file/d/1q74NsAiPiDPK-1AMqZlqVXJxyLWfPCS1/view?usp=drive_link">
                  Resume
                </a>
              </span>
            </div>
          </div>
          <div className="flex h-full text-2xl justify-center flex-col p-2 text-yellow-300">
            <h1>{profile?.firstName}</h1>
            <h1>{profile?.lastName}</h1>
          </div>
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
          <p className="text-red-500">{profile?.country}</p>
        </div>
      </div>
      <div className="flex w-[50%] items-center justify-center">
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
