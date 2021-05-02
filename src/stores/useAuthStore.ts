import create from 'zustand';

type authState = {
  userId: string | null;
  setUserId: (userId: string | null) => void;
};

export const useAuthStore = create<authState>((set) => ({
  userId: localStorage.getItem('id'),
  setUserId: (userId) => set({ userId }),
}));
