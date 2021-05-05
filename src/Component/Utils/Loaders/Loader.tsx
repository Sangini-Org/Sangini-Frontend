import React from 'react';
import styles from './Loader.module.css';
export default function Loader1() {
  return (
    <div className={`${styles.pulseOut} w-full h-full flex justify-center items-center`}>
      <div className={`w-1 h-8 mx-1 bg-green-500`}></div>
      <div className={`w-1 h-8 mx-1 bg-green-500`}></div>
      <div className={`w-1 h-8 mx-1 bg-green-500`}></div>
      <div className={`w-1 h-8 mx-1 bg-green-500`}></div>
      <div className={`w-1 h-8 mx-1 bg-green-500`}></div>
    </div>
  );
}
