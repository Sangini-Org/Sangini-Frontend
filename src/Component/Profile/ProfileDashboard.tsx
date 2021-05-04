import React from 'react';
import { IconContext } from 'react-icons';
import styles from './ProfileDashboard.module.css';
import { FaUser, FaFire, FaRegComment, FiSettings, FaPencilAlt, TiCameraOutline } from 'react-icons/all';
import user from '../Utils/Images/user.jpg';
const ProfileDashboard = () => {
  return (
    <IconContext.Provider value={{ size: '1.75rem' }}>
      <div className={`${styles.dashboardContainor} h-full text-center flex flex-center mx-auto`}>
        <div className=" min-h-full flex flex-col bg-purple-300 text-white">
          <div className="flex mt-20">
            <div className="flex w-1/3 justify-center items-center">
              <button className="rounded-full flex flex-center h-16 w-16 hover:bg-purple-400">
                <FaUser />
              </button>
            </div>
            <div className="flex w-1/3 justify-center items-center">
              <button className="rounded-full flex flex-center h-16 w-16 hover:bg-purple-400">
                <FaFire />
              </button>
            </div>
            <div className="flex w-1/3 justify-center items-center">
              <button className="rounded-full flex flex-center h-16 w-16 hover:bg-purple-400">
                <FaRegComment />
              </button>
            </div>
          </div>
          <div className="flex flex-center mt-10">
            <img src={user} className="h-3/5 w-3/5 rounded-full" />
          </div>
          <div className="flex">
            <div className="flex w-1/3 justify-center items-center">
              <button className="rounded-full flex flex-center h-16 w-16 bg-purple-400 hover:bg-purple-500">
                <FiSettings />
              </button>
            </div>
            <div className="flex w-1/3 mt-20 justify-center items-center">
              <button className="rounded-full flex flex-center h-16 w-16 bg-purple-400 hover:bg-purple-500">
                <TiCameraOutline />
              </button>
            </div>
            <div className="flex w-1/3 justify-center items-center">
              <button className="rounded-full flex flex-center h-16 w-16 bg-purple-400 hover:bg-purple-500">
                <FaPencilAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default ProfileDashboard;
