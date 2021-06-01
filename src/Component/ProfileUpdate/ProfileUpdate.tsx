import React from 'react';
import styles from './ProfileUpdate.module.css';
import explore from '../Utils/Images/explore.png';
import { FiCamera } from 'react-icons/fi';
import { IoIosArrowUp } from 'react-icons/io';

function ProfileUpdate() {
  return (
    <div>
      <div className="flex flex-center justify-center flex-col relative  my-14 ">
        <div className={` box-content h-28 w-28 absolute 	px-1 ${styles.gra2}`}></div>
        <div className={` box-content h-28 w-28 absolute 	mx-1  ${styles.gra}`}></div>
        <div className={` flex flex-center box-content h-28 w-28 -py-28 bg-white text-4xl  z-50 ${styles.camera}`}>
          <FiCamera className="text-black " />
        </div>
      </div>
      <div className="flex flex-center justify-center flex-col ">
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
            <h1 className="justify-self-start text-lg m-1">Gender</h1>
            <p className="relative flex flex-col border-b-2 border-white border-opacity-30 dark-bg text-sm text-blue-300 w-80 m-1 p-1 mb-5">
              Select an option
              <IoIosArrowUp className="absolute right-0 transform rotate-180 text-white text-xl " />
            </p>
          </div>
          <div className="grid text-white">
            <h1 className="justify-self-start text-lg m-1">State</h1>
            <p className="relative flex flex-col border-b-2 border-white border-opacity-30 dark-bg text-sm text-blue-300 w-80 m-1 p-1 mb-5">
              Select an option
              <IoIosArrowUp className="absolute right-0 transform rotate-180 text-white text-xl " />
            </p>
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
        <button className={`text-white font-bold rounded-2xl h-10 w-52 m-3 mb-12 p-1 mb-5 ${styles.grey}`}>
          Save & Continue
        </button>
      </div>
    </div>
  );
}

export default ProfileUpdate;
