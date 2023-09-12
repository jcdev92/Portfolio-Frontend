import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useProjectsStore = create(
  persist(
    (set) => ({
      projects: null,
      setProjects: (projects) => set({ projects }),
      clearProjects: () => set({ projects: null }),
    }),
    {
      name: "projects-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
export default useProjectsStore;