import React, { useEffect, useState } from 'react';
import styles from './Recommendations.module.css';
import explore from '../Utils/Images/explore.png';
import { FilterBox } from '../Utils/Filter/Filter';
import { BsFilter, AiFillPlayCircle, MdLocationOn } from 'react-icons/all';
import { Hobbies } from '../Utils/Dictionary/Hobbies';
import { getRandomColor } from '../Utils/Functions/RandomColor';
import userphoto from '../Utils/Images/user.jpg';
import pic from '../Utils/Images/pic.png';
import pic2 from '../Utils/Images/pic2.png';
function Recommendations() {
  const [request, setRequest] = useState(true);
  const [filter, setfilter] = useState(false);
  const recommendedUsers = [
    {
      name: 'Harshit Singh',
      photo: pic,
      match: '90',
      songname: 'Perfect, Ed Sheeran',
      lyrics: 'Darling You look Perfect Tonight......',
      trackid: '0tgVpDi06FyKpA1z0VMD4v',
    },
    {
      name: 'Drishty Pal',
      photo: pic2,
      match: '90',
      songname: 'Perfect, Ed Sheeran',
      lyrics: 'Darling You look Perfect Tonight......',
      trackid: '0tgVpDi06FyKpA1z0VMD4v',
    },
    {
      name: 'Meghal Bisht',
      photo: userphoto,
      match: '90',
      songname: 'Perfect, Ed Sheeran',
      lyrics: 'Darling You look Perfect Tonight......',
      trackid: '0tgVpDi06FyKpA1z0VMD4v',
    },
    {
      name: 'Dholu Bholu',
      photo: pic,
      match: '90',
      songname: 'Perfect, Ed Sheeran',
      lyrics: 'Darling You look Perfect Tonight......',
      trackid: '0tgVpDi06FyKpA1z0VMD4v',
    },
    {
      name: 'Harsh',
      photo: pic,
      match: '90',
      songname: 'Perfect, Ed Sheeran',
      lyrics: 'Darling You look Perfect Tonight......',
      trackid: '0tgVpDi06FyKpA1z0VMD4v',
    },
    {
      name: 'Pranjal Singh',
      photo: pic2,
      match: '90',
      songname: 'Perfect, Ed Sheeran',
      lyrics: 'Darling You look Perfect Tonight......',
      trackid: '0tgVpDi06FyKpA1z0VMD4v',
    },
    {
      name: 'Mehul Bisht',
      photo: userphoto,
      match: '90',
      songname: 'Perfect, Ed Sheeran',
      lyrics: 'Darling You look Perfect Tonight......',
      trackid: '0tgVpDi06FyKpA1z0VMD4v',
    },
    {
      name: 'Ranjit Shah',
      photo: pic,
      match: '90',
      songname: 'Perfect, Ed Sheeran',
      lyrics: 'Darling You look Perfect Tonight......',
      trackid: '0tgVpDi06FyKpA1z0VMD4v',
    },
  ];
  const [indexes, setIndexes] = useState({
    currentIndex: 0,
    nextIndex: 1,
  });

  return (
    <div className="min-h-full px-4 flex flex-center justify-center flex-col">
      {filter ? <FilterBox filterStart={filter} setFilterStart={setfilter} /> : ''}
      <div className=" flex flex-center text-2xl text-white py-10 pb-8">
        <h1 className="font-bold px-8">Recommendations</h1>
        <BsFilter className="cursor-pointer align-right" onClick={() => setfilter(true)} />
      </div>
      <div>
        <div className={`dark-sec-bg ${styles.userCard} p-6 pb-3 mb-4 rounded-2xl`}>
          <div className="flex flex-col justify-center align-center">
            <img src={explore} className="h-1/3 rounded-2xl" alt="explore_user" />
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
              <div className="">
                <iframe
                  className=""
                  src={'https://open.spotify.com/embed/track/6fW78cd0p3ZDUzoqvx2Xqe?theme=1'}
                  width="100%"
                  height="80"
                  frameBorder="1"
                  allow="encrypted-media"></iframe>
              </div>

              {/* <AiFillPlayCircle className="primary-txt text-7xl mr-2" /> */}
              {/* <p className="flex flex-col flex-wrap ml-2">
                <span className="text-white mb-1.5">Death bed, powfu</span>
                <span className="primary-txt text-sm">
                  My life was kinda short, but I got so manyblessings Happy you were mine
                </span>
              </p> */}
            </div>
          </div>
          {/* <div className="flex flex-center flex-wrap mt-4">
            {Hobbies.slice(0, 10).map((state: String, i: number) => {
              let clr = getRandomColor(i);
              return (
                <p
                  key={i}
                  style={{ backgroundColor: `${clr}`, color: `white` }}
                  className={`font-bold cursor-pointer text-xs rounded-md px-2 py-1 m-1 opacity-80 hover:opacity-100`}
                  id={`hobby${i}`}>
                  {state}
                </p>
              );
            })}
          </div> */}
        </div>
        <div className="text-md flex flex-col flex-center">
          <button
            onClick={() => setRequest(!request)}
            className={`${
              request ? 'primary-bg' : 'red-bg text-white'
            } rounded-full mt-2 py-1.5 w-52 uppercase font-bold`}>
            {request ? 'request' : 'cancel request'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
