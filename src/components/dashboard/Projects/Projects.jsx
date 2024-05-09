import { AnimatePresence } from "framer-motion";
import { ProjectsTable } from "./ProjectsTable";

export const Projects = () => {
  return (
    <div className="flex flex-col w-full bg-transparent h-screen items-center justify-center text-white text-4xl">
      <AnimatePresence initial={true} mode="wait">
        <ProjectsTable />
      </AnimatePresence>
    </div>
  );
};
