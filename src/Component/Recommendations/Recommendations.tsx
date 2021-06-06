import React, { useState } from 'react';
import styles from './Recommendations.module.css';
import explore from '../Utils/Images/explore.png';
import { MdLocationOn } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';

function Recommendations() {
  const [request, setRequest] = useState(true);
  return (
    <div className="h-full px-4 flex flex-center justify-center flex-col">
      <h1 className="text-2xl text-white font-bold text-center py-8">Recommendations</h1>
      <div className={`dark-sec-bg ${styles.userCard} p-6 mb-4 rounded-2xl`}>
        <div className="flex flex-col justify-center align-center">
          <img src={explore} className="rounded-2xl" alt="explore_user" />
          <p className="primary-bg rounded-full h-14 w-14 flex flex-center flex-col text-xs p-1 -mt-10 -ml-4">
            <span className="font-extrabold text-lg">90%</span>
            <span>match</span>
          </p>
        </div>
        <div className="flex flex-col flex-center">
          <h2 className="text-white my-2 text-center text-lg">
            <span>Hermione Granger</span>
            <span>, 26</span>
          </h2>
          <p className={`${styles.loc} w-max py-0.5 px-5 text-sm flex flex-center rounded-full text-white`}>
            <MdLocationOn className="primary-txt mr-1 text-lg" />
            25 kms away
          </p>
          <div className="flex flex-center mt-4">
            <AiFillPlayCircle className="primary-txt text-7xl mr-2" />
            <p className="flex flex-col flex-wrap">
              <span className="text-white mb-1.5">Death bed, powfu</span>
              <span className="primary-txt text-sm">
                My life was kinda short, but I got so manyblessings Happy you were mine
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-md flex flex-col">
        <button
          onClick={() => setRequest(!request)}
          className={`${
            request ? 'primary-bg' : 'red-bg text-white'
          } rounded-full mt-2 py-1.5 w-52 uppercase font-bold`}>
          {request ? 'request' : 'cancel request'}
        </button>
      </div>
    </div>
  );
}

export default Recommendations;
