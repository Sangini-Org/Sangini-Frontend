import React from 'react';
import { TickLottie } from '../Utils/LottieAnimation/LottiePlayer';

const ProfileUpdated = () => {
  return (
    <div className={`flex flex-center justify-center flex-col py-10 md:py-24 m-auto text-white`}>
      <TickLottie />
      <p className="pb-12 pt--12 text-center">Your profile has been updated successfully!</p>
      <button className="py-3 primary-bg rounded-full w-80 mt-10">Back</button>
    </div>
  );
};

export default ProfileUpdated;
