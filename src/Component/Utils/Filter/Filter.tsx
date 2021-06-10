import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle, MdArrowDropDown } from 'react-icons/all';
import Dropdown from '../Dropdown/Dropdown';
import styles from './Filter.module.css';
import { states } from '../Static';
type filterAgs = {
  filterStart: boolean;
  setFilterStart: (dp: boolean) => void;
};

export const FilterBox = ({ filterStart, setFilterStart }: filterAgs) => {
  const [drop, setDrop] = useState(false);
  const [dropTitle, setDropTitle] = useState('');
  const [dropList, setDropList] = useState(['']);
  const [filterClass, setFilterClass] = useState('');

  function delay(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  //close Filterbox
  async function closeFilter() {
    setFilterClass(styles.slidedown);
    await delay(500);
    setFilterStart(!filterStart);
  }
  const setState = () => {
    setDropList(states);
    setDropTitle('State');
    setDrop(true);
  };
  useEffect(() => {
    setFilterClass(styles.slideup);
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
            transform translate-y-full ${filterClass}
            `}>
            <div className="flex justify-between align-center border-b px-4 pb-3 mb-4">
              <AiFillCloseCircle onClick={closeFilter} size="1.5rem" className="cursor-pointer text-muted" />
              <h2 className="text-xl font-bold">Filter</h2>
              <h2 className="text-muted cursor-pointer">Reset</h2>
            </div>
            <div className="h-auto mt-2 px-8 pb-4 border-b dark-sec-border" role="form">
              <label htmlFor="">Country</label>
              <p className={`mb-6 mt-2 text-sm ${styles.borderMuted} text-muted flex justify-between cursor-pointer`}>
                Select an option <MdArrowDropDown size="1.5rem" />
              </p>
              <label htmlFor="">State</label>
              <p
                className={`mb-6 mt-2 text-sm ${styles.borderMuted} text-muted flex justify-between cursor-pointer`}
                onClick={setState}>
                Select an option <MdArrowDropDown size="1.5rem" />
              </p>
              <label htmlFor="">Age:</label>
              <input type="age" className="dark-sec-bg mx-4 my-2 rounded-lg p-1 px-3 w-24" />
            </div>
            <div className="text-center">
              <button className="uppercase py-2 text-black w-40 primary-bg rounded-lg my-4" onClick={closeFilter}>
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
