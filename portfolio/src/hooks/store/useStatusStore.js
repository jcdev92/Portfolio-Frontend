import { create } from "zustand";

const useStatusStore = create((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
  error: null,
  setError: (error) => set({ error }),
  success: null,
  setSuccess: (success) => set({ success }),
}));

export default useStatusStore;
