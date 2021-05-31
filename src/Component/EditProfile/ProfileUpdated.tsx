import React from 'react';
import { FaCheck } from 'react-icons/all';

const ProfileUpdated = () => {
  return (
    <div className={`flex flex-center justify-center flex-col m-auto text-white`}>
      <FaCheck size="200px" className="mt-40 dark-sec-bg rounded-full p-12" />
      <p className="p-12 text-center">Your Profile has been updated successfully</p>
      <button className="btn primary-bg rounded-full w-80 mt-20">Go to Home</button>
    </div>
  );
};

export default ProfileUpdated;
