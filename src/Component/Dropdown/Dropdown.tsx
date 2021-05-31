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
      <div className=" text-white w-4/5 md:w-1/2 lg:w-1/3 max-w-500 md:mx-4 flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" aria-hidden="true"></div>
        <div className="w-full static inline-block align-bottom rounded-lg shadow-xl transform transition-all align-middle">
          <div className="dark-sec-bg rounded-2xl px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex flex-col">
              <div className="flex justify-between align-center mb-4">
                <h2 className="text-2xl" id="modal-title">
                  State
                </h2>
                <AiFillCloseCircle onClick={() => setDropdown(!dropdown)} size="28px" className=" cursor-pointer" />
              </div>
              <div className={`flex items-center h-8 rounded-2xl text-black bg-white`}>
                <FaSearch className="ml-4 " />
                <input
                  className="ml-4 bg-transparent placeholder-black"
                  name="search"
                  placeholder="Search Your State"
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
                      <p
                        key={i}
                        className="flex align-center justify-between mb-3 border-b"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0">
                        {state}
                        <TiTick size="1.65rem" className="rounded-full primary-bg text-white mr-1 mb-1" />
                      </p>
                    );
                  })}
              </div>
              <div className="align-center">
                <button className="btn w-1/2 primary-bg rounded-full mt-3">Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
