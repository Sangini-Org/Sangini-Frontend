import React from 'react';
import styles from './ProfileUpdate.module.css';
import explore from '../Utils/Images/explore.png';
import { BiArrowBack } from 'react-icons/bi';
import { FiCamera } from 'react-icons/fi';

function ProfileUpdate() {
  return (
    <div className="flex flex-center justify-center flex-col ">
      <div className="flex flex-center justify-center flex-col my-14 ">
        <div className={` box-content h-28 w-28  absolute px-1 ${styles.gra2}`}></div>
        <div className={` box-content h-28 w-28  absolute mx-1  ${styles.gra}`}></div>
        <div className={` flex flex-center box-content h-28 w-28 bg-white text-4xl  z-50 ${styles.camera}`}>
          <FiCamera className="text-black " />
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="grid text-white">
          <h1 className="justify-self-start text-lg m-1">First Name</h1>
          <input className="border-b-2 border-white border-opacity-30 dark-bg w-80 m-1 p-1 mb-5"></input>
        </div>
        <div className="grid text-white">
          <h1 className="justify-self-start text-lg m-1">Last Name</h1>
          <input className="border-b-2 border-white border-opacity-30 dark-bg w-80 m-1 p-1 mb-5"></input>
        </div>
        <div className="grid text-white">
          <h1 className="justify-self-start text-lg m-1">Age</h1>
          <input className="border-b-2 border-white border-opacity-30 dark-bg w-80 m-1 p-1 mb-5"></input>
        </div>
        <div className="grid text-white">
          <h1 className="justify-self-start text-lg m-1">Interests or hobbies</h1>
          <input className="border-b-2 border-white border-opacity-30 dark-bg w-80 m-1 p-1 mb-5"></input>
        </div>
        <div className="grid text-white">
          <h1 className="justify-self-start text-lg m-1">Bio</h1>
          <input className={` rounded-2xl h-16 w-80 m-1 p-1 mb-5 ${styles.grey}`}></input>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
