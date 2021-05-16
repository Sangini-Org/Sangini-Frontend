/* eslint-disable import/default */
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import style from './Innerprofile.module.css';
import { GrLocation, FaGraduationCap, DiVim } from 'react-icons/all';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import user1 from '../Utils/Images/user1.jpg';
import user from '../Utils/Images/user.jpg';

export default function Innerprofile() {
  const images = [user, user, user, user];
  images.push(...images);
  const scrollWrapperRef = useRef<any>();
  const scrollWrapper1Ref = useRef<any>();
  const [clickStartX, setClickStartX] = useState<any>();
  const [scrollStartX, setScrollStartX] = useState<any>();
  const scrollWrapperCurrent = scrollWrapperRef.current;
  const scrollWrapper1Current = scrollWrapper1Ref.current;

  useEffect(() => {
    if (scrollWrapperRef.current || scrollWrapper1Ref.current) {
      const handleDragStart = (e: any) => {
        setClickStartX(e.screenX);
        setScrollStartX(scrollWrapperRef.current.scrollLeft);
        setScrollStartX(scrollWrapper1Ref.current.scrollLeft);
      };
      const handleDragMove = (e: any) => {
        e.stopPropagation();
        if (clickStartX !== undefined && scrollStartX !== undefined) {
          const touchDelta = clickStartX - e.screenX;
          scrollWrapperRef.current.scrollLeft = scrollStartX + touchDelta;
          scrollWrapper1Ref.current.scrollLeft = scrollStartX + touchDelta;
        }
      };
      const handleDragEnd = (e: any) => {
        if (clickStartX !== undefined) {
          setClickStartX(undefined);
          setScrollStartX(undefined);
        }
      };

      if (scrollWrapperRef.current.ontouchstart === undefined || scrollWrapper1Ref.current.ontouchstart === undefined) {
        scrollWrapperRef.current.onmousedown = handleDragStart;
        scrollWrapperRef.current.onmousemove = handleDragMove;
        scrollWrapperRef.current.onmouseup = handleDragEnd;
        scrollWrapperRef.current.onmouseleave = handleDragEnd;
      }
    }
  }, [scrollWrapperCurrent, scrollWrapper1Current]);

  function handleClick(scrollOffset: number) {
    scrollWrapperRef.current.scrollLeft -= scrollOffset;
    scrollWrapperRef.current.scrollLeft += scrollOffset;
  }
  function handleChange(scrollOffset: number) {
    scrollWrapper1Ref.current.scrollLeft -= scrollOffset;
    scrollWrapper1Ref.current.scrollLeft += scrollOffset;
  }

  return (
    <div className={`flex justify-center items-center md:h-full`}>
      <div
        className={`flex flex-col mx-auto md:overflow-y-scroll md:h-4/5 sm:border-2 sm:border-gray-300 ${style.container}`}>
        <div>
          <img src={user1} alt="user-pic" className={`${style.userpic}`} />
        </div>

        <div className="mx-4 mb-2 mt-4">
          <h2 className={`text-purple-700 text-3xl mb-4 font-bold`}>
            <span>Chris Evans</span> <span>32</span>
          </h2>
          <div className="flex flex-col text-left">
            <div className="inline-flex items-center justify-left mb-4">
              <GrLocation />
              <span className={`ml-2`}>4km</span>
            </div>
            <div className="inline-flex items-center justify-left mb-4">
              <FaGraduationCap />
              <span className={`ml-2`}>University of California</span>
            </div>
            <hr className="border-1.5 bg-gray-300" />
          </div>
          <div className="mb-4 mt-4">
            <span className="">
              LA raised, NYC living
              <p>
                I make books and videos for works,and give beer to cats for fun. I'm bit of paradox. Love not camping,
                not drinking(please drink what you'd like). 5'9''.
              </p>
            </span>
          </div>
          <hr className="border-1.5 bg-gray-300" />
        </div>

        <div className="relative mx-4 mb-2">
          <h2 className={`text-purple-700 mb-2 font-bold`}>Top Spotify Playlist</h2>
          <div
            className={`${style.carousel_inner} flex justify-center items-center mb-4 overflow-y-hidden overflow-x-scroll`}
            ref={scrollWrapperRef}>
            <button
              className={`w-8 h-8 bg-purple-400 rounded-full ${style.left} justify-center items-center absolute hidden md:flex`}
              onClick={() => handleClick(-278)}>
              <FaArrowCircleLeft className="h-full w-full" />
            </button>
            <div className="inline-flex">
              {images.map((image, index) => {
                return <img key={index} src={image} alt="image" className={`${style.img} pointer-events-auto mr-2`} />;
              })}
            </div>
            <button
              className={`w-8 h-8 bg-purple-400 rounded-full ${style.right} justify-center items-center absolute hidden md:flex`}
              onClick={() => handleClick(+278)}>
              <FaArrowCircleRight className="w-full h-full" />
            </button>
          </div>
          <hr className="border-1.5 bg-gray-300" />
        </div>

        <div className="relative mx-4 mb-2">
          <h2 className={`text-purple-700 mb-2 font-bold`}>62 Instagram Posts</h2>
          <div
            className={`${style.carousel_inner} flex justify-center items-center mb-4 overflow-y-hidden overflow-x-scroll`}
            ref={scrollWrapper1Ref}>
            <button
              className={`w-8 h-8 bg-purple-400 rounded-full ${style.left} justify-center items-center absolute hidden md:flex`}
              onClick={() => handleChange(-278)}>
              <FaArrowCircleLeft className="w-full h-full" />
            </button>
            <div className="flex flex-row">
              {images.map((image, index) => {
                return (
                  <img key={index} src={image} alt="image" className={`${style.img} flex-1 pointer-events-auto mr-2`} />
                );
              })}
            </div>
            <button
              className={`w-8 h-8 bg-purple-400 rounded-full ${style.right} justify-center items-center absolute hidden md:flex`}
              onClick={() => handleChange(+278)}>
              <FaArrowCircleRight className="w-full h-full" />
            </button>
          </div>
          <hr className={`${style.line}`} />
        </div>
        <div className="flex flex-center flex-col mb-4">
          <button className={`text-purple-700 text-xl`}>REPORT</button>
          <h2>Chris Evans</h2>
        </div>
      </div>
    </div>
  );
}
