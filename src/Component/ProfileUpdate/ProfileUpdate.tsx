import React, { useState } from 'react';
import styles from './ProfileUpdate.module.css';
import explore from '../Utils/Images/explore.png';
import { FiCamera } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import Dropdown from '../Dropdown/Dropdown';
import { BiAddToQueue } from 'react-icons/all';

function ProfileUpdate() {
  const [drop, setDrop] = useState(false);

  return (
    <div className="flex flex-col flex-center px-6">
      {drop ? <Dropdown dropdown={drop} setDropdown={setDrop} /> : ''}
      <label htmlFor="pp">
        <div className="flex cursor-pointer flex-center justify-center flex-col relative my-14 w-full max-w-450">
          <div className={` box-content h-28 w-28 absolute 	px-1 ${styles.gra2}`}></div>
          <div className={` box-content h-28 w-28 absolute 	mx-1  ${styles.gra}`}></div>
          <div className={` flex flex-center box-content h-28 w-28 -py-28 bg-white text-4xl  z-50 ${styles.camera}`}>
            <input id="pp" type="file" hidden />
            <FiCamera className="text-black" />
          </div>
        </div>
      </label>
      <form className="flex flex-col flex-center text-white w-full max-w-450">
        <div className="w-full mt-2">
          <label className="text-md">First Name</label>
          <input className={`${styles.borderMuted} dark-bg py-1 mb-5 mt-1 w-full`} />
        </div>
        <div className="w-full mt-2">
          <label className="text-md">Last Name</label>
          <input className={`${styles.borderMuted} dark-bg py-1 mb-5 mt-1 w-full`} />
        </div>
        <div className="w-full mt-2">
          <label className="text-md">Gender</label>
          <p
            onClick={() => setDrop(true)}
            className={`relative flex flex-col ${styles.borderMuted} dark-bg text-sm text-gray-300 py-1 mb-5 mt-1 w-full`}>
            Select an option
            <IoIosArrowDown className="absolute right-0 text-white text-xl" />
          </p>
        </div>
        <div className="w-full mt-2">
          <label className="text-md">State</label>
          <p
            onClick={() => setDrop(true)}
            className={`relative flex flex-col ${styles.borderMuted} dark-bg text-sm text-gray-300 py-1 mb-5 mt-1 w-full`}>
            Select an option
            <IoIosArrowDown className="absolute right-0 text-white text-xl" />
          </p>
        </div>
        <div className="w-full mt-2">
          <label className="text-md">Age</label>
          <input className={`${styles.borderMuted} dark-bg py-1 mb-5 mt-1 w-full`} />
        </div>
        <div className="w-full mt-2">
          <label className="text-md">Interests or hobbies</label>
          <input className={`${styles.borderMuted} dark-bg py-1 mb-5 mt-1 w-full`} />
        </div>
        <div className="w-full mt-2">
          <label className="text-md">Bio</label>
          <textarea rows={3} className="outline-none rounded-lg p-3 mb-5 mt-1 dark-sec-bg w-full" />
        </div>
        <button className="text-white font-semibold rounded-2xl my-4 py-1.5 px-12 dark-sec-bg">Save & Continue</button>
      </form>
    </div>
  );
}

export default ProfileUpdate;
