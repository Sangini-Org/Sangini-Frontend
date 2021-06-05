import React from 'react';
import { TickLottie } from '../Utils/LottieAnimation/LottiePlayer';

const ProfileUpdated = () => {
  return (
    <div className={`flex flex-center justify-center flex-col m-auto text-white`}>
      <TickLottie />
      <p className="p-12 text-center">Your Profile has been updated successfully</p>
      <button className="py-3 primary-bg rounded-full w-80 mt-20">Back</button>
    </div>
  );
};

export default ProfileUpdated;
