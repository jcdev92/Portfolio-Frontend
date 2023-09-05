import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useSocialStore = create(
  persist(
    (set) => ({
      socials: null,
      setSocials: (socials) => set({ socials }),
      clearSocials: () => set({ socials: null })
    }),
    {
      name: "social-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useSocialStore;
