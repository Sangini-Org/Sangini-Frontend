import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import user from '../Utils/Images/user.jpg';
import { Link } from 'react-router-dom';
import { FiCamera, GoSignOut, IoSyncCircle, RiArrowRightSLine } from 'react-icons/all';

export default function ProfileEditing() {
  const [dp, setDp] = useState('');
  return (
    <div className="flex flex-col flex-center px-6">
      <label htmlFor="pp">
        <div className="flex cursor-pointer flex-center justify-center flex-col relative mt-14 mb-6 w-full max-w-450">
          <div className={`box-content h-28 w-28 absolute px-1 ${styles.gra2}`}></div>
          <div className={`box-content h-28 w-28 absolute mx-1  ${styles.gra}`}></div>
          <div className={`flex flex-center box-content h-28 w-28 bg-white z-10 text-4xl ${styles.camera}`}>
            <input id="pp" type="file" hidden />
            {dp === '' ? (
              <FiCamera className="text-black" />
            ) : (
              <img className={`dark-sec-bg rounded-xl cursor-pointer h-28 w-28`} src={dp} />
            )}{' '}
          </div>
        </div>
        <p className="text-lg text-white p-2 mb-8">Change profile photo</p>
      </label>
      <div className={`w-full flex flex-col mx-auto text-white max-w-450`}>
        <Link to="/">
          <div
            className={`${styles.editLink} flex flex-row justify-between items-center text-lg px-6 py-4 mb-5 dark-sec-bg`}>
            Profile Edit
            <RiArrowRightSLine className="text-2xl" />
          </div>
        </Link>
        <Link to="/">
          <div
            className={`${styles.editLink} flex flex-row justify-between items-center text-lg px-6 py-4 mb-5 dark-sec-bg`}>
            Current Mood
            <RiArrowRightSLine className="text-2xl" />
          </div>
        </Link>
        <Link to="/">
          <div
            className={`${styles.editLink} flex flex-row justify-between items-center text-lg px-6 py-4 mb-5 dark-sec-bg`}>
            Gallery Update
            <RiArrowRightSLine className="text-2xl" />
          </div>
        </Link>
        <Link to="/">
          <div
            className={`${styles.editLink} flex flex-row justify-between items-center text-lg px-6 py-4 mb-5 dark-sec-bg`}>
            Settings
            <RiArrowRightSLine className="text-2xl" />
          </div>
        </Link>
        <Link to="/">
          <button
            className={`${styles.button} w-full flex flex-row justify-center items-center rounded-2xl rounded-full py-5 my-8 font-bold primary-bg text-xl text-black md:py-4 md:my-4`}>
            <IoSyncCircle className="text-2xl mr-2 rounded-full" style={{ fill: '#000' }} />
            Resync your spotify connect
          </button>
        </Link>
        <Link to="/">
          <button
            className={`${styles.signOut} w-full flex flex-row justify-center items-center rounded-2xl rounded-full py-5 my-5 font-bold primary-bg text-xl text-black md:py-3`}>
            Sign out
            <GoSignOut className="text-3xl ml-2 pt-2" style={{ fill: '#000' }} />
          </button>
        </Link>
      </div>
    </div>
  );
}
