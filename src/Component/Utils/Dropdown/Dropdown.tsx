import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import styles from './Dropdown.module.css';
import { useProfileStore } from '../../../stores/useProfileStore';

type dropdownAgs = {
  dropdown: boolean;
  title: string;
  setDropdown: (dp: boolean) => void;
  dropdownList: string[];
};

function Dropdown({ dropdown, setDropdown, dropdownList, title }: dropdownAgs) {
  const [searchstate, setSearchState] = useState('');
  const [dropDownValue, setdropDownValue] = useState('');
  const setGender = useProfileStore((state: any) => state.setGender);
  const setState = useProfileStore((state: any) => state.setState);

  const handleDropDownValue = (e: any) => {
    console.log(e.target.childNodes[0].data);
    setdropDownValue(e.target.childNodes[0].data);
  };
  const handleDropDownSubmit = () => {
    if (title === 'Gender') {
      setGender(dropDownValue);
    }
    if (title === 'State') {
      setState(dropDownValue);
    }
    setDropdown(!dropdown);
  };
  return (
    <div
      className="z-50 fixed flex flex-center w-full h-full inset-0 m-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="text-white w-full md:w-1/2 lg:w-1/3 max-w-500 md:mx-4 flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-black opacity-60 bg-opacity-90 transition-opacity" aria-hidden="true"></div>
        <div className="w-full static inline-block align-bottom rounded-lg shadow-xl transform transition-all">
          <div className="flex flex-col dark-sec-bg rounded-2xl px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between align-center mb-4">
              <h2 className="text-2xl font-bold">{title}</h2>
              <AiFillCloseCircle onClick={() => setDropdown(!dropdown)} size="2rem" className="cursor-pointer" />
            </div>
            <div className={`flex items-center py-2 rounded-md my-2 text-black bg-white`}>
              <FaSearch className="ml-4 " />
              <input
                className="px-2 bg-transparent placeholder-black"
                name="search"
                placeholder={`Search your ${title}`}
                onChange={(e) => setSearchState(e.target.value)}
              />
            </div>
            <div className="overflow-hidden overflow-y-scroll h-72 mt-2" role="menu">
              {dropdownList
                .filter((val: string) => {
                  if (searchstate == '') {
                    return val;
                  } else if (val.toLowerCase().includes(searchstate.toLowerCase())) {
                    return val;
                  }
                })
                .map((state: String, i: number) => {
                  return (
                    <div key={i} className="px-1">
                      <p
                        className={`flex align-center py-1 justify-between my-2 border-b ${styles.border}`}
                        role="menuitem"
                        tabIndex={-1}
                        onClick={handleDropDownValue}
                        id="menu-item-0">
                        {state}
                        {dropDownValue === state && (
                          <TiTick size="1.65rem" className="rounded-full primary-bg text-white mr-1 mb-1" />
                        )}
                      </p>
                    </div>
                  );
                })}
            </div>
            <div className="align-center">
              <button
                className="py-2 text-black w-1/3 uppercase primary-bg rounded-md mt-3"
                onClick={handleDropDownSubmit}>
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
