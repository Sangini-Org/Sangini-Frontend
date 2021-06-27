import create from 'zustand';

const id = localStorage.getItem('id')?.replace(/[""]+/g, '');

type authState = {
  userId: string | undefined | null;
  setUserId: (userId: string | undefined | null) => void;
};

export const useAuthStore = create<authState>((set) => ({
  userId: id,
  setUserId: (userId) => set({ userId }),
}));
