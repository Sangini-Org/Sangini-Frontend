import React, { useState, useEffect } from 'react';
import styles from './Landing.module.css';
import { Link } from 'react-router-dom';
import landing1 from '../Utils/Images/landing1.png';
import landing2 from '../Utils/Images/landing2.png';
import landing3 from '../Utils/Images/landing3.png';

const sliderTexts = [
  'Explore people with great music taste like you',
  'Choosing the right person can turn your daily boring routine to lightning',
  'Millions of titles across categories to help you find your chosen one',
];

const sliderImages = [landing1, landing2, landing3];

const sliderHeadings = [
  'Welcome to Sangini',
  'Find out who likes the song you like the most',
  'From Soft Rock to Death Metal you will find all',
];

export default function Landing() {
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    // setInterval(() => {
    //   console.log(slider);
    //   if (slider === 3) {
    //     setSlider(0);
    //   }
    //   setSlider((slider) => slider + 1);
    // }, 3000);
  }, [slider]);

  const handleSlider = (count: number) => {
    setSlider(count);
  };

  return (
    <div className={`h-full text-center flex flex-center flex-col mx-auto py-2 px-3 ${styles.baseContainer}`}>
      <div className="w-full h-3/5 flex-center flex flex-col">
        <img className={styles.landingImg} src={sliderImages[slider]} alt="music_background_image" />
        <h1 className="text-3xl font-medium py-10 px-3 mainHeading">{sliderHeadings[slider]}</h1>
        <p className="break-words w-3/4 font-light px-2 text-lg">{sliderTexts[slider]}</p>
      </div>
      <div className="sliderWrapper mt-8 mb-3">
        <button
          onClick={() => handleSlider(0)}
          className={
            (slider === 0 ? 'bg-purple-900' : 'bg-gray-300') + ' rounded-xl mx-2 p-1.5 w-12 h-1 border-gray-400'
          }></button>
        <button
          onClick={() => handleSlider(1)}
          className={
            (slider === 1 ? 'bg-purple-900' : 'bg-gray-300') + ' rounded-xl mx-2 p-1.5 w-12 h-1 border-gray-400'
          }></button>
        <button
          onClick={() => handleSlider(2)}
          className={
            (slider === 2 ? 'bg-purple-900' : 'bg-gray-300') + ' rounded-xl mx-2 p-1.5 w-12 h-1 border-gray-400'
          }></button>
      </div>
      <div>
        <Link to="/login">
          <button className={`rounded-sm btn w-full my-1 rounded-md ${styles.loginBtn}`}>Login</button>
        </Link>
        <Link to="/register">
          <button className={`rounded-sm btn w-full my-1 rounded-md ${styles.signupBtn}`}>Signup</button>
        </Link>
        <Link to="social-login">
          <button className={`rounded-sm btn w-full my-1 rounded-md ${styles.socialMediaBtn}`}>
            Continue with social media
          </button>
        </Link>
      </div>
    </div>
  );
}
