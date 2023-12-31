import { AnimatePresence } from "framer-motion";
import { SocialMediaTable } from "./SocialMediaTable";

export const SocialMedia = () => {
  return (
    <div className="flex flex-col w-full bg-transparent h-screen items-center justify-center text-white text-4xl">
      <AnimatePresence initial={true} mode="wait">
        <SocialMediaTable />
      </AnimatePresence>
    </div>
  );
};
