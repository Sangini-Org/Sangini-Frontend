import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaCheck, FaEnvelope, FaSpotify, FaUserCheck } from 'react-icons/all';
import styles from './UserVerify.module.css';
const UserVerify = () => {
  return (
    <IconContext.Provider value={{ size: '1.45rem' }}>
      <div className={`${styles.baseContainer} h-full flex flex-center text-center`}>
        <div className="flex flex-col lsWrapper rounded min-h-1/2 p-10">
          <div className="my-3 text-gray-700">
            <h1>You need to verify the profile</h1>
          </div>
          <button
            className={`${styles.btn} my-3 flex justify-center btn bg-purple-500 hover:bg-purple-600 p-12 text-lg`}>
            <FaEnvelope className="mr-4" />
            <span>Verify Email</span>
            <FaCheck className="ml-4" />
          </button>
          <button className={`${styles.btn} my-3 flex justify-center btn bg-green-500 hover:bg-green-600 p-12 text-lg`}>
            <FaSpotify className="mr-4" />
            <span>Connect Spotify</span>
            <FaCheck className="ml-4" />
          </button>
          <button
            className={`${styles.btn} my-3 flex justify-center btn bg-purple-600 hover:bg-purple-400 p-12 text-lg`}>
            <FaUserCheck className="mr-4" />
            <span>Profile Update</span>
            <FaCheck className="ml-4" />
          </button>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default UserVerify;
