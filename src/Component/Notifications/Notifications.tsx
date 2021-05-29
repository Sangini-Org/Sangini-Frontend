import React from 'react';
import styles from './Notifications.module.css';
import explore from '../Utils/Images/explore.png';
import pic2 from '../Utils/Images/pic2.png';
import { ImCross, ImCheckmark } from 'react-icons/im';
import { IconContext } from 'react-icons/lib';

const Notif = () => {
  return (
    <div className="my-4 dark-sec-bg flex flex-space-bw px-4 py-1.5 rounded-lg flex-center">
      <div className="flex flex-center">
        <img className="rounded-full w-14 h-14 mr-2" src={pic2} alt="req" />
        <p className="flex flex-col">
          <span className="text-white font-medium">Hermione Granger</span>
          <span className="text-muted text-sm">93% match</span>
        </p>
      </div>
      <div className="flex">
        <button>
          <ImCheckmark className="primary-txt" />
        </button>
        <button>
          <ImCross className="red-txt" />
        </button>
      </div>
    </div>
  );
};

function Notifications() {
  return (
    <IconContext.Provider value={{ size: '2rem', className: 'bg-white rounded-full mx-2.5 p-1.5' }}>
      <div className="flex flex-center justify-center flex-col">
        <h1 className="text-2xl text-white font-bold text-center py-10 md:py-24">Notifications</h1>
        <div className="w-11/12 max-w-500 px-1 md:px-8">
          <div className="flex flex-space-bw text-lg pb-8">
            <button className="text-white border-b-2 font-bold">Requests</button>
            <button className="text-white font-bold">Likes</button>
            <button className="text-white font-bold">Updates</button>
          </div>
          <div className={`${styles.notifBox} max-h-500 overflow-hidden overflow-y-scroll`}>
            <Notif />
            <Notif />
            <Notif />
            <Notif />
            <Notif />
            <Notif />
            <Notif />
            <Notif />
            <Notif />
            <Notif />
            <Notif />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Notifications;
