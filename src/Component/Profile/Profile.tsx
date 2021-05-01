import React from 'react';
import NavBar from '../NavBar/NavBar';
import { useAuthStore } from '../../stores/useAuthStore';

import { BackIcon } from '../Utils/Svg/Svgs';

export default function Profile() {
  const userId = useAuthStore((state) => state.userId);
  console.log('w');
  console.log(userId);
  // console.log(authState.userId);
  return (
    <div className="flex flex-col h-100 h-screen">
      <div className="p-3 flex justify-between">
        <BackIcon />
        <h1>My Profile</h1>
        <h1>Edit</h1>
      </div>
      <main className="flex flex-1 justify-center">
        <div className="mt-8 text-center">
          <label
            className="h-24 w-24 flex items-center rounded-full px-4 py-6 bg-white text-blue shadow-lg 
          tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
            <input type="file" className="hidden" />
          </label>
          <span>Drishty</span>
        </div>
      </main>
      <NavBar />
    </div>
  );
}
