import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle, FaSearch, MdArrowDropDown } from 'react-icons/all';
import Dropdown from '../Utils/Dropdown/Dropdown';
import styles from './ChangeMood.module.css';
import { playlist } from '../Utils/Static';
type editMoodAgs = {
  moodIcon: boolean;
  setMoodIcon: (dp: boolean) => void;
};

export const ChangeMood = ({ moodIcon, setMoodIcon }: editMoodAgs) => {
  const [drop, setDrop] = useState(false);
  const [dropTitle, setDropTitle] = useState('');
  const [dropList, setDropList] = useState(['']);
  const [slideAnimate, setSlideAnimate] = useState('');
  const [mood, setMood] = useState();
  function delay(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async function close() {
    setSlideAnimate(styles.slidedown);
    await delay(500);
    setMoodIcon(!moodIcon);
  }
  const setPlaylist = () => {
    setDropList(playlist);
    setDropTitle('Playlist');
    setDrop(true);
  };
  useEffect(() => {
    setSlideAnimate(styles.slideup);
  }, []);

  return (
    <div
      className={`z-50 fixed flex justify-center w-full h-full inset-0 m-0`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      {drop ? <Dropdown dropdown={drop} setDropdown={setDrop} dropdownList={dropList} title={dropTitle} /> : ''}
      <div className="text-white w-full max-w-500 flex items-end min-h-screen">
        <div
          className={`fixed inset-0 dark-sec-bg opacity-60 bg-opacity-90 transition-opacity`}
          aria-hidden="true"></div>
        <div className={` w-full static inline-block align-bottom transform `}>
          <div
            className={`flex flex-col dark-bg rounded-t-3xl pt-5
            transform translate-y-full ${slideAnimate}
            `}>
            <div className="flex justify-end align-center px-4 pb-2 mb-4">
              <AiFillCloseCircle onClick={close} size="2rem" className="cursor-pointer" />
            </div>
            <div className="mt-2 px-4 md:px-8 pb-4" role="form">
              <label htmlFor="">Playlist</label>
              <p className="mt-2 text-sm text-muted border-b flex justify-between cursor-pointer" onClick={setPlaylist}>
                Select an option <MdArrowDropDown size="1.5rem" />
              </p>
            </div>
            <div className="mt-2 px-4 md:px-8 pb-4" role="form">
              <label htmlFor="">Favourite Lyrics</label>
              <textarea
                name="textarea"
                rows={4}
                className="w-full flex p-2 mt-4 text-sm dark-sec-bg rounded-lg resize-none outline-none"
              />
            </div>
            <div className="h-auto mt-2 px-4 md:px-8" role="form">
              <h2 className="border-b pb-2">Select your current mood</h2>
              <ul className="border-b text-base px-1.5">
                <li className="p-2 borderMuted cursor-pointer dark-sec-border">
                  <span className="text-xl">😁</span>
                  <span className="px-2 text-sm">Happy</span>
                </li>
                <li className="p-2 borderMuted cursor-pointer dark-sec-border">
                  <span className="text-xl">😠</span>
                  <span className="px-2 text-sm">Angry</span>
                </li>
                <li className="p-2 borderMuted cursor-pointer dark-sec-border">
                  <span className="text-xl">😔</span>
                  <span className="px-2 text-sm">Sad</span>
                </li>
                <li className="p-2 borderMuted cursor-pointer dark-sec-border">
                  <span className="text-xl">🥰</span>
                  <span className="px-2 text-sm">Loved</span>
                </li>
                <li className="p-2 borderMuted dark-sec-border">
                  <span className="text-xl">😁</span>
                  <span className="px-2 text-sm">Happy</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <button className="uppercase py-2 text-black w-40 primary-bg rounded-lg my-4" onClick={close}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
