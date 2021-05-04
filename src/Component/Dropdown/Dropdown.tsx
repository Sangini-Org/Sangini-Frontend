import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import styles from './Dropdown.module.css';

type dropdownAgs = {
  dropdown: boolean;
  setDropdown: (dp: boolean) => void;
};

function Dropdown({ dropdown, setDropdown }: dropdownAgs) {
  return (
    <div
      className="fixed flex flex-center z-10 w-full h-full inset-0 m-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="w-3/4 md:w-1/2 md:mx-4 flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div className="w-full max-h-700 overflow-y-scroll min-h-500 static inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all align-middle">
          <AiFillCloseCircle
            onClick={() => setDropdown(!dropdown)}
            size="28px"
            className="cursor-pointer absolute m-2.5 right-0"
          />
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex flex-col">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 className="text-lg text-center mb-4 leading-6 font-medium text-gray-900" id="modal-title">
                  Choose your city
                </h3>
                <div className="mt-2" role="menu">
                  <p className="bg-gray-200 text-gray-800 p-3" role="menuitem" tabIndex={-1} id="menu-item-0">
                    Delhi
                  </p>
                  <p className="bg-gray-200 text-gray-800 p-3" role="menuitem" tabIndex={-1} id="menu-item-1">
                    Kolkata
                  </p>
                  <p className="bg-gray-200 text-gray-800 p-3" role="menuitem" tabIndex={-1} id="menu-item-2">
                    Chennai
                  </p>
                  <p className="bg-gray-200 text-gray-800 p-3" role="menuitem" tabIndex={-1} id="menu-item-3">
                    Ladakh
                  </p>
                  <p className="bg-gray-200 text-gray-800 p-3" role="menuitem" tabIndex={-1} id="menu-item-4">
                    Delhi
                  </p>
                  <p className="bg-gray-200 text-gray-800 p-3" role="menuitem" tabIndex={-1} id="menu-item-5">
                    Kolkata
                  </p>
                  <p className="bg-gray-200 text-gray-800 p-3" role="menuitem" tabIndex={-1} id="menu-item-6">
                    Chennai
                  </p>
                  <p className="bg-gray-200 text-gray-800 p-3" role="menuitem" tabIndex={-1} id="menu-item-7">
                    Ladakh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
