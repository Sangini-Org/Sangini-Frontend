import React from 'react';
import styles from './Explore.module.css';
import userphoto from '../Utils/Images/user.jpg';
import pic from '../Utils/Images/pic.png';
import pic2 from '../Utils/Images/pic2.png';
import { FaHeart, FaSearch } from 'react-icons/fa';
import { useFormState } from 'react-hook-form';

function Explore() {
  const users = [
    {
      name: 'Harshit Singh',
      photo: pic,
      mood: '😎',
      bio:
        'Cause you said forever, now I drive alone past your street. Cause you said forever, now I drive alone past your street.',
    },
    {
      name: 'Drishty Pal',
      photo: pic2,
      mood: '😍',
      bio: 'Cause you said forever, now I drive alone past your street ',
    },
    {
      name: 'Meghal Bisht',
      photo: userphoto,
      mood: '😆',
      bio: 'Cause you said forever, now I drive alone past your street ',
    },
    {
      name: 'Dholu Bholu',
      photo: pic,
      mood: '😆',
      bio: 'Cause you said forever, now I drive alone past your street ',
    },
    {
      name: 'Harsh',
      photo: pic,
      mood: '😎',
      bio:
        'Cause you said forever, now I drive alone past your street. Learned our lessons through the tears. Made memories we knew would never fade',
    },
    {
      name: 'Pranjal Singh',
      photo: pic2,
      mood: '😍',
      bio: 'Learned our lessons through the tears. Made memories we knew would never fade',
    },
    {
      name: 'Mehul Bisht',
      photo: userphoto,
      mood: '😆',
      bio: 'The animals inside came out to play. Went face to face with all our fears',
    },
    {
      name: 'Ranjit Shah',
      photo: pic,
      mood: '😆',
      bio:
        'Once upon a younger year. When all our shadows disappeared. Learned our lessons through the tears. Made memories we knew would never fade',
    },
  ];

  return (
    <div className={`flex flex-center justify-center px-4 flex-col m-auto ${styles.baseContainer}`}>
      <h1 className="text-2xl text-white font-bold text-center py-10 md:py-24">Explore</h1>
      <div className={`p-4 w-full rounded-full ${styles.searchBox}`}>
        <FaSearch className="ml-2" />
        <input className="ml-2 placeholder-white bg-transparent" name="search" placeholder="Search..." />
      </div>
      <div className={`${styles.notifBox} my-4 max-h-500 overflow-hidden overflow-y-scroll`}>
        <div className="ml-1">
          {users.map((user, i: number) => {
            return (
              <div className={`flex flex-col md:flex-row border-b py-2 w-full mb-2 ${styles.border}`} key={i}>
                <div className="flex md:w-4/6">
                  <img className="h-16 w-16 rounded-full" src={user.photo} />
                  <div className="px-2">
                    <p className="text-white mb-2">{user.name}</p>
                    <p className="primary-txt text-xs">{user.bio}</p>
                  </div>
                </div>
                <div className="px-2 py-4 md:w-2/6 flex flex-col">
                  <div className="flex justify-between mb-1">
                    <p className="text-2xl">{user.mood}</p>
                    <button className="rounded-full bg-white p-2">
                      <FaHeart className="red-txt" />
                    </button>
                  </div>
                  <button className="primary-bg rounded-2xl py-1 px-4 my-1 font-semibold">Request</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Explore;
