import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaSearch, FaBell, FaHeart, FaUser } from 'react-icons/fa';
function NavBar() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  return (
    <IconContext.Provider value={{ size: '1.75rem' }}>
      <div className="z-50 bottom-0 bg-purple-300 w-full absolute md:w-36 md:h-full md:m-auto md:rounded-r-lg">
        <nav className="tabs flex justify-center text-xs md:flex-col md:items-center md:py-28">
          <button
            onClick={() => setActiveMenuItem(0)}
            data-target="panel-1"
            className={`${
              activeMenuItem === 0 ? 'bg-purple-400 opacity-70' : ''
            } w-full py-4 md:py-6 md:m-1.5 flex flex-col items-center justify-center text-gray-600 hover:opacity-70 hover:bg-purple-400`}>
            <FaSearch className={activeMenuItem === 0 ? 'text-white' : 'text-purple-900'} />
            <span className={`${activeMenuItem === 0 ? 'text-white' : 'text-purple-900'} mt-1.5`}>Explore</span>
          </button>
          <button
            onClick={() => setActiveMenuItem(1)}
            data-target="panel-2"
            className={`${
              activeMenuItem === 1 ? 'bg-purple-400 opacity-70' : ''
            } w-full py-4 md:py-6 md:m-1.5 flex flex-col items-center justify-center text-gray-600 hover:opacity-70 hover:bg-purple-400`}>
            <FaHeart className={activeMenuItem === 1 ? 'text-white' : 'text-purple-900'} />
            <span className={`${activeMenuItem === 1 ? 'text-white' : 'text-purple-900'} mt-1.5`}>Heart</span>
          </button>
          <button
            onClick={() => setActiveMenuItem(2)}
            data-target="panel-3"
            className={`${
              activeMenuItem === 2 ? 'bg-purple-400 opacity-70' : ''
            } w-full py-4 md:py-6 md:m-1.5 flex flex-col items-center justify-center text-gray-600 hover:opacity-70 hover:bg-purple-400`}>
            <FaBell className={activeMenuItem === 2 ? 'text-white' : 'text-purple-900'} />
            <span className={`${activeMenuItem === 2 ? 'text-white' : 'text-purple-900'} mt-1.5`}>Notification</span>
          </button>
          <button
            onClick={() => setActiveMenuItem(3)}
            data-target="panel-4"
            className={`${
              activeMenuItem === 3 ? 'bg-purple-400 opacity-70' : ''
            } w-full py-4 md:py-6 md:m-1.5 flex flex-col items-center justify-center text-gray-600 hover:opacity-70 hover:bg-purple-400`}>
            <FaUser className={activeMenuItem === 3 ? 'text-white' : 'text-purple-900'} />
            <span className={`${activeMenuItem === 3 ? 'text-white' : 'text-purple-900'} mt-1.5`}>Profile</span>
          </button>
        </nav>
      </div>
    </IconContext.Provider>
  );
}

export default NavBar;
