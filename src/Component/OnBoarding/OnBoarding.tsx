import React from 'react';

import styles from './OnBoarding.module.css';
import logo from '../../Images/Money.png';
import listening from '../../Images/Listening.png';

export default function OnBoarding() {
  return (
    <div>
      <img className={styles.logo} src={logo} alt="Logo" />
      <img className={styles.listening} src={listening} alt="Listening" />

      <div className={styles.circle}></div>
      <div className={styles.content}>
        <p className={styles.heading}>
          Connect with people with <br /> same music taste.
        </p>

        <p className={styles.subHeading}>
          You can chat and you can express <br /> your feeling as emoji.
        </p>

        <button className={styles.explore}>
          <b>Explore</b>
        </button>

        <div className={styles.bar}></div>
      </div>
    </div>
  );
}
