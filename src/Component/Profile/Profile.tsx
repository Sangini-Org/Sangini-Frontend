import React from 'react';
import NavBar from '../NavBar/NavBar';
import styles from './Profile.module.css';
import user from '../Utils/Images/user.jpg';

export default function Profile() {
  return (
    <div className="flex flex-col min-h-full">
      <div className="p-3 flex justify-end">
        <h1>Edit</h1>
      </div>
      <main className="flex flex-1 justify-center">
        <div className="mt-8 text-center">
          <img className={`${styles.userImg} rounded-full`} src={user} alt="user" />
          <input type="file" className="hidden" />
          <p className="border-b-2 border-gray-300 pb-4 font-medium text-lg	my-3">Drishty Pal</p>
        </div>
      </main>
      <NavBar />
    </div>
  );
}
