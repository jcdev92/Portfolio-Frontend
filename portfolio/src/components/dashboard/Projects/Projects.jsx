import { ProjectsTable } from "./ProjectsTable";
import useStatusStore from "../../../store/useStatusStore";

export const Projects = () => {
  useStatusStore.getState().setSuccess(null);
  useStatusStore.getState().setError(null);
  return (
    <div className="flex flex-col w-full bg-transparent h-screen items-center justify-center text-white text-4xl">
      <ProjectsTable />
    </div>
  );
};
