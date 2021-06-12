import React, { useEffect, useRef, useState } from 'react';
import profilePic from '../Utils/Images/profile.png';
import user from '../Utils/Images/user.jpg';
import song from '../Utils/Images/song.png';
import styles from './Profile.module.css';
import { Link } from 'react-router-dom';
import {
  SiInstagram,
  AiFillTwitterCircle,
  IoIosClose,
  BsArrowRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from 'react-icons/all';

export default function Profile() {
  const images = [user, profilePic, user, profilePic, user, profilePic];
  const [tags, setTags] = useState(['#Romantic', '#GoodVibes']);

  const songList = [
    {
      songImg: song,
      songName: 'Night Changes',
      songSinger: 'One Direction',
    },
    {
      songImg: song,
      songName: 'Lovely',
      songSinger: 'Billie Ellish and DJ Khaleed',
    },
    {
      songImg: song,
      songName: 'Intentions',
      songSinger: 'Justin Bieber',
    },
  ];

  images.push(...images);
  const scrollWrapperRef = useRef<any>();
  const [clickStartX, setClickStartX] = useState<any>();
  const [scrollStartX, setScrollStartX] = useState<any>();
  const scrollWrapperCurrent = scrollWrapperRef.current;

  useEffect(() => {
    if (scrollWrapperRef.current) {
      const handleDragStart = (e: any) => {
        setClickStartX(e.screenX);
        setScrollStartX(scrollWrapperRef.current.scrollLeft);
      };
      const handleDragMove = (e: any) => {
        e.stopPropagation();
        if (clickStartX !== undefined && scrollStartX !== undefined) {
          const touchDelta = clickStartX - e.screenX;
          scrollWrapperRef.current.scrollLeft = scrollStartX + touchDelta;
        }
      };
      const handleDragEnd = (e: any) => {
        if (clickStartX !== undefined) {
          setClickStartX(undefined);
          setScrollStartX(undefined);
        }
      };

      if (scrollWrapperRef.current.ontouchstart === undefined) {
        scrollWrapperRef.current.onmousedown = handleDragStart;
        scrollWrapperRef.current.onmousemove = handleDragMove;
        scrollWrapperRef.current.onmouseup = handleDragEnd;
        scrollWrapperRef.current.onmouseleave = handleDragEnd;
      }
    }
  }, [scrollWrapperCurrent]);

  function handleClick(scrollOffset: number) {
    scrollWrapperRef.current.scrollLeft -= scrollOffset;
    scrollWrapperRef.current.scrollLeft += scrollOffset;
  }

  const addTags = (event: any) => {
    if (event.target.value !== '') {
      setTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };

  // h-64 w-96 md:w-full
  const removeTags = (indexToRemove: any) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  return (
    <div className="min-h-full flex flex-col px-4 py-8 max-w-450 mx-auto">
      <div className="flex cursor-pointer flex-center justify-center flex-col relative text-white mb-4 w-full max-w-450 md:mb-0">
        <h4 className="text-2xl font-bold mb-6">Profile</h4>
        <div
          className={`${styles.carousel_inner} flex justify-center items-center overflow-y-hidden overflow-x-scroll max-w-450`}
          ref={scrollWrapperRef}>
          <button
            className={`${styles.btn} ${styles.left} justify-center items-center absolute hidden md:flex`}
            onClick={() => handleClick(-175)}>
            <BsChevronDoubleLeft className={`${styles.arrow}`} />
          </button>
          <div className="inline-flex">
            {images.map((image, index) => {
              return <img key={index} src={image} alt="image" className={`${styles.img} h-64 w-full`} />;
            })}
          </div>
          <button
            className={`${styles.btn} ${styles.right} justify-center items-center absolute hidden md:flex`}
            onClick={() => handleClick(+175)}>
            <BsChevronDoubleRight className={`${styles.arrow}`} />
          </button>
        </div>
        {/* <img src={profilePic} alt="profile_img" className="h-64 w-96 md:w-full" /> */}
      </div>
      <div className="capitalize text-md w-full flex flex-col my-4 md:my-8 mx-auto text-white max-w-450">
        <div className="flex flex-col">
          <h4 className="font-bold text-xl">Lucifier Morningstar, 25</h4>
          <span className={`${styles.bio} mt-2 mb-2`}>
            I wish I were your mirror so that I could look at you every morning
          </span>
        </div>
        <div className="relative">
          <h4 className="mb-5">Tags:</h4>
          <ul className="flex flex-wrap absolute p-0 m-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className={`${styles.list} w-auto flex justify-center items-center mr-3 pl-2 list-style-none`}>
                <span>{tag}</span>
                <IoIosClose className="text-3xl pt-1" onClick={() => removeTags(index)} />
              </li>
            ))}
          </ul>
          <input
            type="text"
            onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
            className={`${styles.input} w-full h-20 p-4 flex-1`}
          />
        </div>
      </div>
      <div className="flex flex-col text-white">
        <h4 className="text-xl">Social Accounts</h4>
        <div className="flex flex-row items-center text-4xl my-6">
          <Link to="/">
            <AiFillTwitterCircle className={`w-12 h-12 mr-6 ml-4 ${styles.icon}`} />
          </Link>
          <Link to="/">
            <SiInstagram className={`w-12 h-12 mr-6 ml-4  ${styles.instagram}`} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col text-white">
        <h4 className="text-xl mb-4">English mix</h4>
        {songList.map((song, index) => {
          return (
            <div key={index} className="flex flex-row">
              <img src={song.songImg} alt="song" className={`${styles.image} w-16 h-16 mr-2 mb-2`} />
              <div>
                <h4>{song.songName}</h4>
                <h4 className={`${styles.data}`}>by</h4>
                <h4 className={`${styles.data}`}>{song.songSinger}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        <button className={`${styles.button} flex flex-row justify-center items-center text-black mb-10 w-44 h-10`}>
          Current Mood
          <BsArrowRight className="ml-4 pt-1 text-2xl" />
        </button>
        <button className={`${styles.button2} flex justify-center items-center text-white w-44 h-10`}>
          Report User
        </button>
      </div>
    </div>
  );
}
