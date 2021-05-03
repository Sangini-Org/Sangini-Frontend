import React from 'react';
import NavBar from '../NavBar/NavBar';
import { useAuthStore } from '../../stores/useAuthStore';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';
import user from '../Utils/Images/user.jpg';

export default function Profile() {
  const userId = useAuthStore((state) => state.userId);
  console.log('w');
  console.log(userId);
  return (
    <div className="flex flex-col min-h-full">
      <div className="flex-1 h-full md:w-1/2 md:m-auto">
        <div className="bg-gray-200">
          <div className="p-3.5 flex justify-end">
            <Link to="/profile/edit">
              <button className="rounded-md border-2 bg-white px-4 py-1">Edit</button>
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="w-full flex flex-center flex-col mt-4">
              <img className={`${styles.userImg} rounded-full`} src={user} alt="user" />
              <p className="pb-4 font-medium text-lg m-3 mb-0">Drishty Pal</p>
            </div>
          </div>
        </div>
        <div className={`${styles.infoBox} flex-1`}>
          <h1 className="text-center m-4 mainHeading text-lg uppercase">Information</h1>
          <div>
            <p>Name</p>
            <p>Meghal Bisht</p>
          </div>
          <hr />
          <div>
            <p>Date of Birth</p>
            <p>25-07-2000</p>
          </div>
          <hr />
          <div>
            <p>Gender</p>
            <p>Female</p>
          </div>
          <hr />
          <div>
            <p>Spotify Playlist</p>
            <p>Connected</p>
          </div>
          <hr />
        </div>
      </div>
      <NavBar />
    </div>
  );
}
