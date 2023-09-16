import { SkillsTable } from "./SkillsTable";
import { AnimatePresence } from "framer-motion";

export const Skills = () => {
  return (
    <div className="flex flex-col w-full bg-transparent h-screen items-center justify-center text-white text-4xl">
      <AnimatePresence initial={true} mode="wait">
        <SkillsTable />
      </AnimatePresence>
    </div>
  );
};
