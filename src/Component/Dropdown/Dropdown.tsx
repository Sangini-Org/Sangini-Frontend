import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import styles from './Dropdown.module.css';

type dropdownAgs = {
  dropdown: boolean;
  setDropdown: (dp: boolean) => void;
};

const cities = [
  'Random',
  'Array',
  'For',
  'Just',
  'Some',
  'Random',
  'Cities',
  'Created',
  'By some',
  'Random Person',
  'Delhi',
  'Agra',
  'Mumbai',
];

function Dropdown({ dropdown, setDropdown }: dropdownAgs) {
  return (
    <div
      className="fixed flex flex-center z-10 w-full h-full inset-0 m-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="w-full md:w-1/2 lg:w-1/3 max-w-500 md:mx-4 flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div className="w-full max-h-500 min-h-500 static inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all align-middle">
          <AiFillCloseCircle
            onClick={() => setDropdown(!dropdown)}
            size="28px"
            className="cursor-pointer absolute m-2.5 right-0"
          />
          <div className="bg-white rounded px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex flex-col">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 className="text-lg text-center mb-4 leading-6 font-medium text-gray-900" id="modal-title">
                  Choose your city
                </h3>
                <div className="overflow-hidden overflow-y-scroll max-h-400 mt-2" role="menu">
                  {cities.map((city: String, i: number) => {
                    return (
                      <p
                        key={i}
                        className="flex align-center justify-between bg-purple-200 text-gray-800 p-3"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0">
                        {city}
                        <TiTick size="1.65rem" className="rounded-full bg-purple-300 text-purple-900" />
                      </p>
                    );
                  })}
                </div>
                <button className="btn bg-purple-900 w-full rounded-md mt-3">Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
