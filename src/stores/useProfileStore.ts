import create from 'zustand';

type profileData = {
  dob: string | null;
  setDob: (dob: string | null) => void;
  gender: string | null;
  setGender: (gender: string | null) => void;
  state: string | null;
  setState: (state: string | null) => void;
  profileStatus: string | null;
  setprofileStatus: (state: string | null) => void;
};

export const useProfileStore = create<profileData>((set) => ({
  dob: '',
  setDob: (dob) => set({ dob }),
  gender: '',
  setGender: (gender) => set({ gender }),
  state: '',
  setState: (state) => set({ state }),
  profileStatus: '',
  setprofileStatus: (profileStatus) => set({ profileStatus }),
}));
