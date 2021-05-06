import React from 'react';
import styles from './ProfileCard.module.css';
import { IconContext } from 'react-icons';
import { GoLocation, FaHeart, ImCross } from 'react-icons/all';
import girl from '../Utils/Images/girl.jpg';
import { Link } from 'react-router-dom';

function ProfileCard() {
  return (
    <IconContext.Provider value={{ size: '1.55rem' }}>
      <div className="w-full h-full flex flex-center">
        <div className={`relative flex flex-col w-full h-full md:h-700 md:w-500 md:m-auto`}>
          <img className="h-full w-full object-cover bg-gray-200 md:rounded-xl" src={girl} alt="user_name" />
          <div className={`${styles.infoBox} md:rounded-b-xl h-240 p-4 text-white rounded flex flex-col`}>
            <div className="flex my-1.5">
              <h1 className="capitalize text-3xl font-black">ruth jackson</h1>
              <h1 className="text-3xl font-black px-1.5 ml-2">21</h1>
            </div>
            <p className="flex py-1 align-center">
              <GoLocation size="1.2rem" className="mr-1" /> 4 kms away
            </p>
            <p className="py=1">You don't event have to try it's always a good time!</p>
            <div className={`flex flex-center ${styles.iconBox}`}>
              <button className={styles.unlike}>
                <ImCross />
              </button>
              <button className={styles.like}>
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default ProfileCard;
