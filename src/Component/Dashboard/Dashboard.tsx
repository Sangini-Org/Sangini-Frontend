import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import user from '../Utils/Images/user.jpg';
import { Link } from 'react-router-dom';
import { FiCamera, GoSignOut, IoSyncCircle, RiArrowRightSLine } from 'react-icons/all';

export default function ProfileEditing() {
  const [dp, setDp] = useState('');
  return (
    <div className="min-h-full flex flex-col flex-center px-4">
      <label htmlFor="pp">
        <div className="flex cursor-pointer flex-center justify-center flex-col relative mt-14 mb-6 w-full max-w-450">
          <div className={`box-content h-28 w-28 absolute rounded-3xl px-1 ${styles.gra2}`}></div>
          <div className={`box-content h-28 w-28 absolute rounded-3xl mx-1  ${styles.gra}`}></div>
          <div className="flex flex-center box-content h-28 w-28 bg-white z-10 text-4xl rounded-3xl">
            <input id="pp" type="file" hidden />
            {dp === '' ? (
              <FiCamera className="text-black" />
            ) : (
              <img className={`dark-sec-bg rounded-xl cursor-pointer h-28 w-28`} src={dp} />
            )}{' '}
          </div>
        </div>
        <p className="text-lg text-white p-2 my-4 md:my-8">Meghal Bisht</p>
      </label>
      <div className={`capitalize text-md w-full flex flex-col my-4 md:my-8 mx-auto text-white max-w-450`}>
        <Link to="/" className={`link rounded-2xl flex justify-between items-center p-4 mb-5 dark-sec-bg`}>
          Profile edit
          <RiArrowRightSLine className="text-2xl" />
        </Link>
        <Link to="/" className={`link rounded-2xl flex justify-between items-center p-4 mb-5 dark-sec-bg`}>
          Current mood
          <RiArrowRightSLine className="text-2xl" />
        </Link>
        <Link to="/" className={`link rounded-2xl flex justify-between items-center p-4 mb-5 dark-sec-bg`}>
          Gallery update
          <RiArrowRightSLine className="text-2xl" />
        </Link>
        <Link to="/" className={`link rounded-2xl flex justify-between items-center p-4 mb-5 dark-sec-bg`}>
          Settings
          <RiArrowRightSLine className="text-2xl" />
        </Link>
        <Link
          to="/"
          className="link w-full flex flex-center text-center rounded-full p-4 my-6 font-bold primary-bg text-black">
          <IoSyncCircle className="text-2xl mr-2" style={{ fill: '#000' }} />
          Resync your spotify connect
        </Link>
        <Link
          to="/dashboard"
          className="link flex flex-center w-48 mx-auto rounded-full py-3 my-4 font-bold primary-bg text-black">
          Sign out
          <GoSignOut className="mx-2" style={{ fill: '#000' }} />
        </Link>
      </div>
    </div>
  );
}
