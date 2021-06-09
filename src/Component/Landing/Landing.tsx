import React from 'react';
import styles from './Landing.module.css';
import logo from '../Utils/Images/Money.png';
import listening from '../Utils/Images/Listening.png';
import { Link } from 'react-router-dom';

export default function OnBoarding() {
  return (
    <div className={`${styles.landingContainer} mx-auto`}>
      <img className={`block mx-auto mt-20`} src={logo} alt="Logo" />
      <img className={`block mx-auto my-6`} src={listening} alt="Listening" />

      <div className={`${styles.overlay} bg-white bg-opacity-10 rounded-full fixed -bottom-28`}></div>
      <div className="pb-8 pl-4 mt-24">
        <p className="text-white font-bold text-xl">
          Connect with people with <br /> same music taste.
        </p>

        <p className="mt-4 primary-txt font-normal text-sm">
          You can chat and you can express <br /> your feeling as emoji.
        </p>
        <Link to="/register">
          <button className="py-4 font-bold px-12 mt-16 primary-bg text-xl rounded-full border-none">Explore</button>
        </Link>
      </div>
    </div>
  );
}
