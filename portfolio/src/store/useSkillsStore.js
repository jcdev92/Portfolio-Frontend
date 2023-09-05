import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useSkillsStore = create(
  persist(
    (set) => ({
      skills: null,
      setSkills: (skills) => set({ skills }),
      clearSkills: () => set({ skills: null }),
    }),
    {
      name: "skills-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
export default useSkillsStore;
