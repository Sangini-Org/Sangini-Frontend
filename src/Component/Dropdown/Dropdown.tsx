import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import styles from './Dropdown.module.css';

type dropdownAgs = {
  dropdown: boolean;
  setDropdown: (dp: boolean) => void;
};

const states = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttarakhand',
  'Uttar Pradesh',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli',
  'Daman and Diu',
  'Delhi',
  'Lakshadweep',
  'Puducherry',
];

function Dropdown({ dropdown, setDropdown }: dropdownAgs) {
  const [searchstate, setSearchState] = useState('');
  return (
    <div
      className="fixed flex flex-center z-10 w-full h-full inset-0 m-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className=" text-white w-full md:w-1/2 lg:w-1/3 max-w-500 md:mx-4 flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-black opacity-60 bg-opacity-50 transition-opacity" aria-hidden="true"></div>
        <div className="w-full static inline-block align-bottom rounded-lg shadow-xl transform transition-all align-middle">
          <div className="flex flex-col dark-sec-bg rounded-2xl px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between align-center mb-4">
              <h2 className="text-2xl font-bold">State</h2>
              <AiFillCloseCircle onClick={() => setDropdown(!dropdown)} size="1.75rem" className=" cursor-pointer" />
            </div>
            <div className={`flex items-center py-2 rounded-full my-2 text-black bg-white`}>
              <FaSearch className="ml-4 " />
              <input
                className="px-2 bg-transparent placeholder-black"
                name="search"
                placeholder="Search your state"
                onChange={(e) => setSearchState(e.target.value)}
              />
            </div>
            <div className="overflow-hidden overflow-y-scroll h-72 mt-2" role="menu">
              {states
                .filter((val) => {
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
                        id="menu-item-0">
                        {state}
                        <TiTick size="1.65rem" className="rounded-full primary-bg text-white mr-1 mb-1" />
                      </p>
                    </div>
                  );
                })}
            </div>
            <div className="align-center">
              <button className="py-4 text-black w-1/2 font-bold primary-bg rounded-full mt-3">Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
