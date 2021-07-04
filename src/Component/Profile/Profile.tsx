import React, { useEffect, useRef, useState } from 'react';
import profilePic from '../Utils/Images/profile.png';
import user from '../Utils/Images/user.jpg';
import song from '../Utils/Images/song.png';
import styles from './Profile.module.css';
import { Link } from 'react-router-dom';
import { SiInstagram, AiFillTwitterCircle, BsArrowRight, IoIosArrowBack, IoIosArrowForward } from 'react-icons/all';
import SpotifyPlay from '../Utils/SpotifyPlay/SpotifyPlay';
import { getRandomColor } from '../Utils/Functions/RandomColor';

export default function Profile() {
  const images = [user, profilePic, user, profilePic, user, profilePic];
  const [tags, setTags] = useState([
    '#Romantic',
    '#GoodVibes',
    'Musician',
    'Sufi Music',
    'Hip Hop',
    'Qawwali',
    'Wanderlust',
    'Heavy Metal',
    'Rock',
  ]);

  const songList = [
    {
      songImg: song,
      songName: 'Night Changes',
      songSinger: 'One Direction',
      trackid: '5O2P9iiztwhomNh8xkR9lJ',
    },
    {
      songImg: song,
      songName: 'Lovely',
      songSinger: 'Billie Ellish and DJ Khaleed',
      trackid: '0u2P5u6lvoDfwTYjAADbn4',
    },
    {
      songImg: song,
      songName: 'Intentions',
      songSinger: 'Justin Bieber',
      trackid: '364dI1bYnvamSnBJ8JcNzN',
    },
  ];

  const [songPlay, setSongPlay] = useState(false);
  const [trackid, settrackId] = useState('');
  const playSong = (trackid: string) => {
    settrackId(trackid);
    setSongPlay(true);
  };

  images.push(...images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, settranslateValue] = useState(0);
  const slideWidth = () => {
    const x = document.getElementById('slide')?.clientWidth;
    console.log(x);
    return x as number;
  };
  const goToPrevSlide = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1), settranslateValue(translateValue + slideWidth());
  };
  const goToNextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
      settranslateValue(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
    settranslateValue(translateValue - slideWidth());
    console.log(translateValue);
  };

  return (
    <div className="min-h-full flex flex-col px-4 py-8 md:px-12 max-w-450 mx-auto">
      {songPlay ? <SpotifyPlay player={songPlay} setPlayer={setSongPlay} trackid={trackid} /> : ''}
      <div className="flex cursor-pointer flex-center justify-center flex-col relative text-white mb-4 w-full md:mb-0">
        <h4 className="text-2xl font-bold mb-6">Profile</h4>
        <div
          className={`${styles.carousel_inner} flex justify-center items-center overflow-y-hidden overflow-x-scroll`}>
          <div
            id="slide"
            style={{
              transform: `translateX(${translateValue}px)`,
              transition: 'transform ease-out 0.45s',
            }}
            className="inline-flex">
            {images.map((image, index) => {
              return <img key={index} src={image} alt="image" className={` ${styles.img} rounded-lg w-full`} />;
            })}
          </div>
          <button
            className={`absolute left-0 h-full dark-bg opacity-10 hover:opacity-50`}
            onClick={() => goToPrevSlide()}>
            <IoIosArrowBack className={` ${styles.arrows} w-8 md:w-16`} />
          </button>
          <button
            className={`absolute right-0 h-full dark-bg opacity-10 hover:opacity-50`}
            onClick={() => goToNextSlide()}>
            <IoIosArrowForward className={` ${styles.arrows} w-8 md:w-16`} />
          </button>
        </div>
      </div>
      <div className="capitalize text-md w-full flex flex-col my-4 md:my-8 mx-auto text-white">
        <div className="flex flex-col">
          <h4 className="font-bold text-xl">Lucifier Morningstar, 25</h4>
          <span className={`primary-txt w-3/4 text-xs mt-2 mb-2`}>
            I wish I were your mirror so that I could look at you every morning
          </span>
        </div>
        <div className="relative">
          <h4 className="mb-5">Tags:</h4>
          <div className="">
            <ul className="flex flex-wrap p-0">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  style={{ backgroundColor: `${getRandomColor(index)}` }}
                  className={`flex-center flex font-bold text-sm rounded-full px-3 py-1 m-1 opacity-80 hover:opacity-100`}>
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-white">
        <h4 className="text-lg mb-4">English mix</h4>
        {songList.map((song, index) => {
          return (
            <div key={index} className="flex flex-row" onClick={() => playSong(song.trackid)}>
              <img src={song.songImg} alt="song" className={`rounded-xl w-16 h-16 mr-2 mb-2`} />
              <div>
                <h4>{song.songName}</h4>
                <h4 className="primary-txt text-xs">by</h4>
                <h4 className="primary-txt text-xs">{song.songSinger}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col text-white mt-4">
        <h4 className="text-lg">Social Accounts</h4>
        <div className="flex flex-row items-center text-4xl mt-2">
          <Link to="/" className="flex flex-center rounded-full dark-sec-bg w-16 h-16 mr-3 ">
            <AiFillTwitterCircle className={`w-10 h-10 rounded-full ${styles.twitter}`} />
          </Link>
          <Link to="/" className="flex flex-center rounded-full dark-sec-bg  w-16 h-16 mr-3 ">
            <SiInstagram className={`w-10 h-10 rounded-xl ${styles.instagram}`} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        <button
          className={`yellow-bg rounded-2xl flex flex-row justify-center items-center text-black mb-10 w-44 h-10`}>
          Current Mood
          <BsArrowRight className="ml-4 pt-1 text-2xl" />
        </button>
        <button className={`red-bg rounded-2xl flex justify-center items-center text-white w-44 h-10`}>
          Report User
        </button>
      </div>
    </div>
  );
}
