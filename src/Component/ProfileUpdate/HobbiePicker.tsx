import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { Hobbies } from '../Utils/Dictionary/Hobbies';
import { TiTick } from 'react-icons/ti';
import { getRandomColor } from '../Utils/Functions/RandomColor';
import { toast } from 'react-toastify';

type hobbiesArgs = {
  hobbies: boolean;
  setHobbies: (dp: boolean) => void;
};

function HobbiePicker({ hobbies, setHobbies }: hobbiesArgs) {
  const [searchstate, setSearchState] = useState('');
  let [selectedHobbies, setSelectedHobbies] = useState<String[]>([]);
  const hobbieHandler = (tag: String, i: number) => {
    if (selectedHobbies.includes(tag)) {
      selectedHobbies = selectedHobbies.filter((item) => item !== tag);
      document.getElementById('maxHobbyAlert')?.classList.add('hidden');
      document.getElementById(`hobbyTick${i}`)?.classList.add('hidden');
    } else {
      if (selectedHobbies.length >= 10) {
        document.getElementById('maxHobbyAlert')?.classList.remove('hidden');
        toast.warn('Atmost 10 hobbies are allowed');
        return;
      }
      document.getElementById('maxHobbyAlert')?.classList.add('hidden');
      selectedHobbies.push(tag);
      document.getElementById(`hobbyTick${i}`)?.classList.remove('hidden');
    }
  };

  return (
    <div
      className="z-50 fixed flex flex-center w-full h-full inset-0 m-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="text-white w-full max-w-700 md:mx-4 flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-black opacity-60 bg-opacity-90 transition-opacity" aria-hidden="true"></div>
        <div className="w-full static inline-block align-bottom rounded-lg shadow-xl transform transition-all">
          <div className="flex flex-col dark-sec-bg rounded-2xl px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between align-center mb-4">
              <h2 className="text-2xl font-bold">Interests &amp; Hobbies</h2>
              <AiFillCloseCircle onClick={() => setHobbies(!hobbies)} size="2rem" className="cursor-pointer" />
            </div>
            <div className={`flex items-center py-2 rounded-md my-2 text-black bg-white`}>
              <FaSearch className="ml-4 " />
              <input
                className="px-2 w-full bg-transparent placeholder-black"
                name="search"
                autoComplete="off"
                placeholder={`Search your interests (maximum 10)`}
                onChange={(e) => setSearchState(e.target.value)}
              />
            </div>
            <p id="maxHobbyAlert" className="font-bold hidden red-txt text-sm">
              You can only select upto 10 interest tags!
            </p>
            <div className="overflow-hidden overflow-y-scroll flex flex-wrap flex-center h-72 mt-2" role="menu">
              {Hobbies.filter((val: string) => {
                if (searchstate == '') {
                  return val;
                } else if (val.toLowerCase().includes(searchstate.toLowerCase())) {
                  return val;
                }
              }).map((state: String, i: number) => {
                return (
                  <button
                    onClick={() => hobbieHandler(state, i)}
                    key={i}
                    style={{ backgroundColor: `${getRandomColor()}` }}
                    className={`cursor-pointer flex-center flex font-bold text-sm rounded-full px-3 py-1 my-2 mx-1.5 opacity-80 hover:opacity-100`}
                    id={`hobby${i}`}>
                    {state}
                    <TiTick id={`hobbyTick${i}`} className="ml-1 hidden" />
                  </button>
                );
              })}
            </div>
            <div className="align-center">
              <button className="py-2 text-black w-1/3 uppercase primary-bg rounded-md mt-3">Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HobbiePicker;
