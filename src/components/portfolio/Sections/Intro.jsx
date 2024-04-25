import useProfileStore from "../../../store/useProfileStore";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../../hooks/useProfile";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

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
    <div className="flex h-screen w-screen items-center justify-center md:h-full md:w-full">
      <div className="loader2"></div>
    </div>
  ) : isSuccess ? (
    <div className="flex flex-col h-full min-h-screen md:min-h-full md:grid md:grid-cols-1 md:gap-4 lg:grid-cols-3 lg:gap-8 p-2">
      <motion.div
        className="order-2 md:order-1 md:flex md:flex-col md:items-center md:justify-center md:h-full rounded-lg p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 10 }}
      >
        <img src={profile?.bioImage} alt="bioImage" />
      </motion.div>
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
        <p className="w-3/4 overflow-y-auto text-sm text-gray-400">
          <Typewriter
            onInit={(typewriter) => {
              // define a time sleep until star
              typewriter.pauseFor(4000).start();
              typewriter.changeDelay(20).start();
              typewriter.typeString(profile?.aboutMe).start();
            }}
            options={{
              cursor: "",
            }}
          />
        </p>
        <br />
        <span className="hidden md:flex font-bold text-center text-yellow-300">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(14000).start();
              typewriter.changeDelay(40).start();
              typewriter.typeString("Biography: ").start();
            }}
            options={{
              cursor: "",
            }}
          />{" "}
        </span>{" "}
        <p className="hidden overflow-y-auto md:flex w-3/4 text-sm text-gray-400">
          <Typewriter
            onInit={(typewriter) => {
              // define a time sleep until star
              typewriter.pauseFor(22000).start();
              typewriter.changeDelay(20).start();
              typewriter.typeString(profile?.biography).start();
            }}
            options={{
              cursor: "",
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
