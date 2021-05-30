import React from 'react';

import styles from './OnBoarding.module.css';
import logo from '../../Images/Money.png';
import listening from '../../Images/Listening.png';

export default function OnBoarding() {
  return (
    <div>
      <img className={`block mx-auto mt-20`} src={logo} alt="Logo" />
      <img className={`block mx-auto mt-8 mb-6`} src={listening} alt="Listening" />

      <div className={`${styles.circle} rounded-full fixed -bottom-28 right-4`}></div>
      <div className={`${styles.content} pb-8 pl-4 mt-24`}>
        <p className={`${styles.heading} text-white font-bold text-xl`}>
          Connect with people with <br /> same music taste.
        </p>

        <p className={`${styles.subHeading} mt-4 primary-txt font-normal text-sm`}>
          You can chat and you can express <br /> your feeling as emoji.
        </p>

        <button className={`${styles.explore} py-4 px-12 mt-16 primary-bg text rounded-full border-none`}>
          <b>Explore</b>
        </button>
      </div>
    </div>
  );
}
