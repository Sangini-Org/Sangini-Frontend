import React from 'react';
import profilePic from '../Utils/Images/profile.png';
import song from '../Utils/Images/song.png';
import styles from './Profile.module.css';
import { FiInstagram, FiTwitter } from 'react-icons/all';

const Profile = () => {
  const tag = ['#Pop', '#Romantic'];
  return (
    <div className="h-full px-4 flex flex-center flex-col">
      <h1 className="text-2xl text-white font-bold text-center py-2">Profile</h1>
      <div className={`flex flex-col justify-center align-center object-contain ${styles.profilepic}`}>
        <img src={profilePic} className="rounded-2xl" alt="explore_user" />
      </div>
      <div className="justify-center">
        <div>
          <h1 className="text-2xl text-white text-left py-2 mx-auto  ">Ritesh , 21</h1>
          <p className="text-2xl  text-left py-2 primary-txt">
            My life was kinda short, but I got so manyblessings Happy you were mine
          </p>
        </div>
        <div>
          <div>
            <h1 className="text-2xl text-white text-left py-2 mx-auto ">Tags:</h1>
            <div className="bg-gray-700 h-20">
              {tag.map((t, index) => {
                return (
                  <span key={index} className="px-1 mx-1 hover:bg-gray-100 primary-txt bg-gray-500 rounded-2xl">
                    {t}
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-white text-left py-2 mx-auto ">Social Accounts</h1>
            <div className=" flex ">
              <FiInstagram className={`h-4 p-2 bg-blend-lighten rounded-2xl mx-2 w-1/18 h-8 ${styles.instagram}`} />
              <FiTwitter className="h-auto bg-blue-400 rounded-full mx-4 w-16" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-white text-left py-2 mx-auto ">English Mix</h1>
            <div className="flex">
              <img src={song} alt="song_logo" className="rounded-2xl h-24" />
              <div className="h-24">
                <h2 className=" text-white text-left py-2 px-3 ">Night Changes</h2>
                <p className="px-3  text-left  primary-txt">
                  by <br /> One Direction
                </p>
              </div>
            </div>
            <div className="flex">
              <img src={song} alt="song_logo" className="rounded-2xl h-24" />
              <div className="h-24">
                <h2 className=" text-white text-left py-2 px-3 ">Night Changes</h2>
                <p className="px-3  text-left  primary-txt">
                  by <br /> One Direction
                </p>
              </div>
            </div>
            <div className="flex">
              <img src={song} alt="song_logo" className="rounded-2xl h-24" />
              <div className="h-24">
                <h2 className=" text-white text-left py-2 px-3 ">Night Changes</h2>
                <p className="px-3  text-left  primary-txt">
                  by <br /> One Direction
                </p>
              </div>
            </div>
          </div>
          <div className="align-center px-60 py-20">
            <h2 className="bg-yellow-300  rounded-full py-3 px-6 text-center my-8">Current Mood </h2>
            <h2 className="bg-red-500  text-white rounded-full py-3 px-6 text-center">Report User </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
