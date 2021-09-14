import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import user from '../Utils/Images/user.jpg';
import { Link, useHistory } from 'react-router-dom';
import { FiCamera, GoSignOut, IoSyncCircle, RiArrowRightSLine } from 'react-icons/all';
import { ChangeMood } from '../ChangeMood/ChangeMood';
import { useAuthStore } from '../../stores/useAuthStore';
import { axiosConfig, setAxiosAuthToken } from '../../configs/axios';
import { apiEndPoints } from '../../configs/endpoints';
interface Profilephoto {
  url: string;
}
export default function ProfileEditing() {
  const [dp, setDp] = useState('');
  const [mood, setMood] = useState(false);
  const [selectedImg, setSelectedImg] = useState<null | Profilephoto>(null);
  const history = useHistory();
  const userId = useAuthStore((state) => state.userId);

  const setUserId = useAuthStore((state) => state.setUserId);
  useEffect(() => {
    fetchProfilephoto();
  }, []);

  async function fetchProfilephoto() {
    const result = await axiosConfig.get(apiEndPoints.userProfileData + userId + '/image?type=profile');
    setSelectedImg(result.data.data[0]);
  }

  const handleLogout = () => {
    localStorage.clear();
    setUserId(null);
  };

  const handleResyncSpotify = async (value: any): Promise<any> => {
    const result = await axiosConfig.get(apiEndPoints.resyncSpotify + `?isSanginiPlaylist=${value}`);
    console.log(result);
  };
  return (
    <div className="min-h-full flex flex-col flex-center px-4">
      {mood ? <ChangeMood moodIcon={mood} setMoodIcon={setMood} /> : ''}
      <label htmlFor="pp">
        <div className="flex cursor-pointer flex-center justify-center flex-col relative mt-14 mb-6 w-full max-w-450">
          <div className={`box-content h-28 w-28 absolute rounded-3xl px-1 ${styles.gra2}`}></div>
          <div className={`box-content h-28 w-28 absolute rounded-3xl mx-1  ${styles.gra}`}></div>
          <div className="flex flex-center box-content h-28 w-28 bg-white z-10 text-4xl rounded-3xl">
            {selectedImg?.url === '' ? (
              <FiCamera className="text-black" />
            ) : (
              <img className={`dark-sec-bg rounded-xl cursor-pointer h-28 w-28`} src={selectedImg?.url} />
            )}{' '}
          </div>
        </div>
        <p className="text-lg text-white p-2 my-4 md:mt-8">Meghal Bisht</p>
      </label>
      <div className={`capitalize text-md w-full flex flex-col my-4 md:my-8 mx-auto text-white max-w-450`}>
        <Link
          to="/profile/update"
          className={`link rounded-2xl flex justify-between items-center p-4 mb-5 dark-sec-bg`}>
          Profile edit
          <RiArrowRightSLine className="text-2xl" />
        </Link>
        <div
          onClick={() => setMood(true)}
          className={`link rounded-2xl flex justify-between items-center p-4 mb-5 dark-sec-bg`}>
          Current mood
          <RiArrowRightSLine className="text-2xl" />
        </div>
        <Link
          to="/profile/gallery"
          className={`link rounded-2xl flex justify-between items-center p-4 mb-5 dark-sec-bg`}>
          Gallery update
          <RiArrowRightSLine className="text-2xl" />
        </Link>
        <Link to="/" className={`link rounded-2xl flex justify-between items-center p-4 mb-5 dark-sec-bg`}>
          Settings
          <RiArrowRightSLine className="text-2xl" />
        </Link>
        <button
          onClick={() => handleResyncSpotify(0)}
          className="link w-full flex flex-center text-center rounded-full p-4 my-6 font-bold primary-bg text-black">
          <IoSyncCircle className="text-2xl mr-2" style={{ fill: '#000' }} />
          Resync your spotify connect
        </button>
        <button
          className="link flex flex-center w-48 mx-auto rounded-full py-3 my-4 font-bold primary-bg text-black"
          onClick={handleLogout}>
          Sign out
          <GoSignOut className="mx-2" style={{ fill: '#000' }} />
        </button>
      </div>
    </div>
  );
}
