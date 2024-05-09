import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const createStore = (storeName, initialState) => {
    return create(
      persist(
        (set) => ({
          state: initialState,
          setState: (newState) => set({ state: newState }),
          clearState: () => set({ state: initialState }),
        }),
        {
          name: storeName,
          storage: createJSONStorage(() => localStorage),
        }
      )
    );
  };

  
const useProfileStore = createStore("profile-storage", null);
const useProjectsStore = createStore("projects-storage", null);
const useSkillsStore = createStore("skills-storage", null);
const useSocialStore = createStore("social-storage", null);
const loginStateStore = createStore("loginstate-storage", null);


export {
    useProfileStore,
    useProjectsStore,
    useSkillsStore,
    useSocialStore,
    loginStateStore
}
