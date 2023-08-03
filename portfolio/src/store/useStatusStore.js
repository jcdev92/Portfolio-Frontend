import { create } from "zustand";

const useStatusStore = create((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
  error: null,
  setError: (error) => set({ error }),
  success: null,
  setSuccess: (success) => set({ success }),
  clearSatus: () => set({ loading: false, error: null, success: null }),

}))

export default useStatusStore;
