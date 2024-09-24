import { create } from "zustand";

const useStore = create((set) => ({
  ready: false,
  isReady: () => set((state) => ({ ready: true })),
}));
export default useStore;
