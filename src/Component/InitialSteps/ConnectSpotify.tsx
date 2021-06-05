import React from 'react';
import { FaSpotify } from 'react-icons/fa';

const ConnectSpotify = () => {
  return (
    <div
      className="z-50 fixed flex flex-center z-10 w-full h-full inset-0 m-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="w-full flex justify-center min-h-screen text-center ">
        <div
          className="fixed h-full inset-0 bg-white opacity-60 bg-opacity-90 transition-opacity"
          aria-hidden="true"></div>
        <div className="w-full flex flex-col flex-center transform transition-all">
          <button className="py-4 primary-bg rounded-full w-80 font-bold flex flex-center">
            <FaSpotify className="mr-4" size="1.5rem" />
            <span>Connect Your Spotify Account</span>
          </button>
          <p className="p-8 font-bold">You can continue after linking your Spotify account to Sangini</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectSpotify;
