import React from 'react';
import { IconContext } from 'react-icons';
import styles from './Profile.module.css';
import { FiSettings, TiCameraOutline, FaRegUser } from 'react-icons/all';
import user from '../Utils/Images/user.jpg';
import { Link } from 'react-router-dom';

const ProfileDashboard = () => {
  return (
    <IconContext.Provider value={{ size: '1.55rem' }}>
      <div className="min-h-full flex flex-col bg-purple-300 2xl:w-1/2 md:w-2/3 md:m-auto">
        <div className="flex flex-col flex-center mt-20">
          <img className={`${styles.userImg} rounded-full`} src={user} alt="user" />
          <p className="pb-4 font-medium text-xl mx-3 mt-6 mb-0">Drishty Pal</p>
        </div>
        <div className="flex w-3/5 md:w-1/2 -mt-12 mx-auto text-white">
          <div className="flex w-1/3 justify-center items-center">
            <Link
              to="/profile"
              className="rounded-full -mt-4 flex flex-center h-16 w-16 bg-purple-400 hover:bg-purple-500">
              <FaRegUser />
            </Link>
          </div>
          <div className="flex w-1/3 mt-20 justify-center items-center">
            <Link
              to="/profile/edit/gallery"
              className="rounded-full flex flex-center h-20 w-20 bg-purple-400 hover:bg-purple-500">
              <TiCameraOutline size="2.7rem" />
            </Link>
          </div>
          <div className="flex w-1/3 justify-center items-center">
            <Link
              to="/profile/edit"
              className="rounded-full -mt-4 flex flex-center h-16 w-16 bg-purple-400 hover:bg-purple-500">
              <FiSettings />
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default ProfileDashboard;
