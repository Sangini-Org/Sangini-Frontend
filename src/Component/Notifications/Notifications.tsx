import React, { useState } from 'react';
import styles from './Notifications.module.css';
import explore from '../Utils/Images/explore.png';
import userphoto from '../Utils/Images/user.jpg';
import pic from '../Utils/Images/pic.png';
import pic2 from '../Utils/Images/pic2.png';
import { ImCross, ImCheckmark } from 'react-icons/im';
import { IconContext } from 'react-icons/lib';

const RequestsTab = () => {
  const userRequest = [
    {
      name: 'Harshit Singh',
      photo: pic,
      match: '90',
    },
    {
      name: 'Drishty Pal',
      photo: pic2,
      match: '95',
    },
    {
      name: 'Meghal Bisht',
      photo: userphoto,
      match: '91',
    },
    {
      name: 'Dholu Bholu',
      photo: pic,
      match: '100',
    },
  ];

  return (
    <div className={`${styles.notifBox} max-h-500 overflow-hidden overflow-y-scroll`}>
      {userRequest.map((request, key) => (
        <div className="my-4 dark-sec-bg flex flex-space-bw px-4 py-1.5 rounded-lg flex-center" key={key}>
          <div className="flex flex-center">
            <img className="rounded-full w-14 h-14 mr-2" src={request.photo} alt="req" />
            <p className="flex flex-col">
              <span className="text-white font-medium">{request.name}</span>
              <span className="text-muted text-sm">{request.match}% match</span>
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
      ))}
    </div>
  );
};
const LikesTab = () => {
  const userLiked = [
    {
      name: 'Harshit Singh',
      photo: pic,
    },
    {
      name: 'Drishty Pal',
      photo: pic2,
    },
    {
      name: 'Meghal Bisht',
      photo: userphoto,
    },
    {
      name: 'Dholu Bholu',
      photo: pic,
    },
  ];
  return (
    <div className={`${styles.notifBox} max-h-500 overflow-hidden overflow-y-scroll`}>
      {userLiked.map((request, key) => (
        <div className=" flex px-4 py-1.5 " key={key}>
          <div className="flex flex-center">
            <img className="rounded-full w-14 h-14 mr-2" src={request.photo} alt="req" />
            <p className="text-white">
              {request.name}
              <span className=" font-light text-muted"> has liked your Profile.</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
const UpdatesTab = () => {
  return (
    <div className="flex flex-col dark-sec-bg text-white p-4 mx-2 rounded-3xl rounded-tl-none">
      <h2 className="primary-txt mb-2 font-medium">Important Notice</h2>
      <p className=" font-thin py-2">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
        sociis natoque penatibus et magnis dis parturient montes,
      </p>
      <p className="flex justify-end">20/06/2020 2:30 PM</p>
    </div>
  );
};
function Notifications() {
  const [activeTab, setActiveTab] = useState('requests');
  return (
    <IconContext.Provider value={{ size: '2rem', className: 'bg-white rounded-full mx-2.5 p-1.5' }}>
      <div className="flex flex-center justify-center flex-col">
        <h1 className="text-2xl text-white font-bold text-center py-10 md:py-24">Notifications</h1>
        <div className="w-11/12 max-w-500 px-1 md:px-8">
          <div className="flex flex-space-bw text-lg pb-8">
            <button
              className={`${activeTab === 'requests' ? 'border-b-2' : ''} text-white font-bold`}
              onClick={() => setActiveTab('requests')}>
              Requests
            </button>
            <button
              className={`${activeTab === 'likes' ? 'border-b-2' : ''} text-white font-bold`}
              onClick={() => setActiveTab('likes')}>
              Likes
            </button>
            <button
              className={`${activeTab === 'updates' ? 'border-b-2' : ''} text-white font-bold`}
              onClick={() => setActiveTab('updates')}>
              Updates
            </button>
          </div>
          {activeTab === 'requests' ? <RequestsTab /> : activeTab === 'likes' ? <LikesTab /> : <UpdatesTab />}
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Notifications;
