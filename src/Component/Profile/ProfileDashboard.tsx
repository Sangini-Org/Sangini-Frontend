import React from 'react';
import { IconContext } from 'react-icons';
import styles from './Profile.module.css';
import { AiOutlineLogout, TiCameraOutline, FaRegUser } from 'react-icons/all';
import user from '../Utils/Images/user.jpg';
import { Link, useHistory } from 'react-router-dom';
import { useAuthStore } from '../../stores/useAuthStore';

const ProfileDashboard = () => {
  const setUserId = useAuthStore((state) => state.setUserId);
  const history = useHistory();
  const handleLogOut = () => {
    console.log('test');
    setUserId(null);
    localStorage.clear();
    history.push('/');
  };

  return (
    <IconContext.Provider value={{ size: '1.75rem' }}>
      <div className="min-h-full flex flex-col bg-purple-300 2xl:w-1/2 md:w-2/3 md:m-auto">
        <div className="flex flex-col flex-center mt-20">
          <img className={`${styles.userImg} rounded-full`} src={user} alt="user" />
          <p className="pb-4 font-medium text-xl mx-3 mt-6 mb-0">Drishty Pal</p>
        </div>
        <div className="flex w-4/5 md:w-1/2 -mt-6 mx-auto text-white">
          <div className="flex w-1/3 justify-center items-center">
            <Link to="/profile" className="rounded-full flex flex-center h-16 w-16 bg-purple-400 hover:bg-purple-500">
              <FaRegUser />
            </Link>
          </div>
          <div className="flex w-1/3 mt-20 justify-center items-center">
            <Link
              to="/profile/edit/gallery"
              className="rounded-full flex flex-center h-16 w-16 bg-purple-400 hover:bg-purple-500">
              <TiCameraOutline />
            </Link>
          </div>
          <div className="flex w-1/3 justify-center items-center">
            <button
              onClick={handleLogOut}
              className="rounded-full flex flex-center h-16 w-16 bg-purple-400 hover:bg-purple-500">
              <AiOutlineLogout />
            </button>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default ProfileDashboard;
