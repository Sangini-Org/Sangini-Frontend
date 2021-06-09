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
    await delay(1000);
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
            <div className="h-auto mt-2 px-8 pb-4" role="form">
              <label htmlFor="">Playlist</label>
              <p
                className="mb-4 text-sm text-blue-800 border-b flex justify-between cursor-pointer"
                onClick={setPlaylist}>
                Select an option <MdArrowDropDown size="1.5rem" />
              </p>
            </div>
            <div className="h-auto mt-2 px-8 pb-4" role="form">
              <label htmlFor="">Favourite Lyrics</label>
              <textarea
                name="textarea"
                rows={5}
                cols={60}
                className="flex p-2 my-4 text-sm dark-sec-bg rounded-2xl resize-none focus:border-none focus:outline-none"
              />
            </div>
            <div className="h-auto mt-2 px-8 pb-4" role="form">
              <h2 className="border-b-2 mb-2">Select your Current Mood</h2>
              <ul className="border-b mb-2 text-base">
                <li className="p-2 border-b-2 dark-sec-border">
                  <span>😁</span> Happy
                </li>
                <li className="p-2 border-b-2 dark-sec-border">
                  <span>😠</span> Angry
                </li>
                <li className="p-2 border-b-2 dark-sec-border">
                  <span>😔</span> Sad
                </li>
                <li className="p-2 border-b-2 dark-sec-border">
                  <span>🥰</span> Loved
                </li>
              </ul>
            </div>
            <div className="text-center">
              <button className="py-3 text-black w-60 font-bold primary-bg rounded-full mt-3" onClick={close}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
