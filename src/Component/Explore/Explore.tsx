import React from 'react';
import styles from './Explore.module.css';
import userphoto from '../Utils/Images/user.jpg';
import { FaHeart, FaSearch } from 'react-icons/fa';
import { useFormState } from 'react-hook-form';

function Explore() {
  const users = [
    {
      name: 'Janitor',
      photo: userphoto,
      mood: '😍',
      bio: 'Cause you said forever, now I drive alone past your street ',
    },
    {
      name: 'Janitor',
      photo: userphoto,
      mood: '😍',
      bio: 'Cause you said forever, now I drive alone past your street ',
    },
    {
      name: 'Janitor',
      photo: userphoto,
      mood: '😍',
      bio: 'Cause you said forever, now I drive alone past your street ',
    },
  ];

  return (
    <div className={`flex flex-center justify-center flex-col m-auto ${styles.baseContainer}`}>
      <h1 className="text-2xl text-white font-bold text-center py-10">Explore</h1>
      <div className={styles.searchBox}>
        <FaSearch className="ml-2" />
        <input className="ml-2 placeholder-white bg-transparent" name="search" placeholder="Search..." />
      </div>
      <div className="ml-1 p-8">
        {users.map((user, i: number) => {
          return (
            <div className="flex border-b py-2 mb-2" key={i}>
              <img className="h-16 w-16 rounded-lg" src={user.photo} />
              <div className="px-2">
                <p className="text-white">{user.name}</p>
                <p className="primary-txt text-xs">{user.bio}</p>
              </div>
              <div className="px-2">
                <div className="flex justify-between mb-1">
                  <p className="text-2xl">{user.mood}</p>
                  <button className="rounded-full bg-white p-2">
                    <FaHeart className="red-txt" />
                  </button>
                </div>
                <button className="primary-bg rounded-2xl py-1 px-4 mb-2 font-semibold">Request</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Explore;
