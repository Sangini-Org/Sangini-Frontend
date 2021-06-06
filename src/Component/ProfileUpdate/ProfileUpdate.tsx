import React, { useState } from 'react';
import styles from './ProfileUpdate.module.css';
import explore from '../Utils/Images/explore.png';
import { FiCamera } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import Dropdown from '../Utils/Dropdown/Dropdown';
import { BiAddToQueue } from 'react-icons/all';
import DatePicker from '../Utils/DatePicker/DatePicker';
import { states, genders } from '../Utils/Static';

function ProfileUpdate() {
  const [drop, setDrop] = useState(false);
  const [dropTitle, setDropTitle] = useState('');
  const [dropList, setDropList] = useState(['']);
  const [dob, setDob] = useState(false);
  const [dp, setDp] = useState('');

  const setGender = () => {
    setDropList(genders);
    setDropTitle('Gender');
    setDrop(true);
  };

  const setState = () => {
    setDropList(states);
    setDropTitle('State');
    setDrop(true);
  };
  function handlePreview(e: any) {
    if (e.target.files) {
      const imgFile = URL.createObjectURL(e.target.files[0]);
      setDp(imgFile);
      console.log(imgFile);
    }
  }

  return (
    <div className="flex flex-col flex-center px-6">
      {drop ? <Dropdown dropdown={drop} setDropdown={setDrop} dropdownList={dropList} title={dropTitle} /> : ''}
      {dob ? <DatePicker dropdown={dob} setDropdown={setDob} /> : ''}
      <label htmlFor="pp">
        <div className="flex cursor-pointer flex-center justify-center flex-col relative my-14 w-full max-w-450">
          <div className={` box-content h-28 w-28 absolute 	px-1 ${styles.gra2}`}></div>
          <div className={` box-content h-28 w-28 absolute 	mx-1  ${styles.gra}`}></div>
          <div className={` flex flex-center box-content h-28 w-28 bg-white z-10 text-4xl ${styles.camera}`}>
            <input id="pp" type="file" hidden onChange={handlePreview} />
            {dp === '' ? (
              <FiCamera className="text-black" />
            ) : (
              <img className={`dark-sec-bg rounded-xl cursor-pointer h-28 w-28`} src={dp} />
            )}{' '}
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
            onClick={setGender}
            className={`cursor-pointer relative flex flex-col ${styles.borderMuted} dark-bg text-sm text-gray-300 py-1 mb-5 mt-1 w-full`}>
            Select an option
            <IoIosArrowDown className="absolute right-0 text-white text-xl" />
          </p>
        </div>
        <div className="w-full mt-2">
          <label className="text-md">DOB</label>
          <p
            onClick={() => setDob(true)}
            className={`cursor-pointer relative flex flex-col ${styles.borderMuted} dark-bg text-sm text-gray-300 py-1 mb-5 mt-1 w-full`}>
            Select an option
            <IoIosArrowDown className="absolute right-0 text-white text-xl" />
          </p>
        </div>
        <div className="w-full mt-2">
          <label className="text-md">State</label>
          <p
            onClick={setState}
            className={`cursor-pointer relative flex flex-col ${styles.borderMuted} dark-bg text-sm text-gray-300 py-1 mb-5 mt-1 w-full`}>
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
        <button className="font-semibold rounded-md my-4 py-1.5 px-12 dark-sec-bg">Save & Continue</button>
      </form>
    </div>
  );
}

export default ProfileUpdate;
