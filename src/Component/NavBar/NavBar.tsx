import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChatDotsFill, BsFillStarFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
function NavBar() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  return (
    <IconContext.Provider value={{ className: 'text-xl md:text-2xl' }}>
      <div className="z-50 bottom-0 dark-sec-bg w-full fixed h-20 md:w-36 md:h-full md:m-auto md:rounded-r-xl md:rounded-t-none rounded-t-xl">
        <nav className="tabs flex flex-center h-full md:h-auto justify-center text-xs md:flex-col md:items-center md:py-28">
          <button
            onClick={() => setActiveMenuItem(0)}
            data-target="panel-1"
            className={`${
              activeMenuItem === 0 ? 'dark-shadow' : ''
            } w-full h-full md:py-6 md:m-1.5 flex flex-col items-center justify-center hover:bg-black`}>
            <FaSearch className={activeMenuItem === 0 ? 'primary-txt' : 'text-white'} />
            <span className={`${activeMenuItem === 0 ? 'primary-txt' : 'text-white'} mt-1.5`}>Explore</span>
          </button>
          <button
            onClick={() => setActiveMenuItem(1)}
            data-target="panel-2"
            className={`${
              activeMenuItem === 1 ? 'dark-shadow' : ''
            } w-full h-full md:py-6 md:m-1.5 flex flex-col items-center justify-center hover:bg-black`}>
            <BsFillStarFill className={activeMenuItem === 1 ? 'primary-txt' : 'text-white'} />
            <span className={`${activeMenuItem === 1 ? 'primary-txt' : 'text-white'} mt-1.5`}>Likes</span>
          </button>
          <button
            onClick={() => setActiveMenuItem(2)}
            data-target="panel-3"
            className={`${
              activeMenuItem === 2 ? 'dark-shadow' : ''
            } w-full h-full md:py-6 md:m-1.5 flex flex-col items-center justify-center hover:bg-black`}>
            <FaBell className={activeMenuItem === 2 ? 'primary-txt' : 'text-white'} />
            <span className={`${activeMenuItem === 2 ? 'primary-txt' : 'text-white'} mt-1.5`}>Notification</span>
          </button>
          <button
            onClick={() => setActiveMenuItem(3)}
            data-target="panel-3"
            className={`${
              activeMenuItem === 3 ? 'dark-shadow' : ''
            } w-full h-full md:py-6 md:m-1.5 flex flex-col items-center justify-center hover:bg-black`}>
            <BsChatDotsFill className={activeMenuItem === 3 ? 'primary-txt' : 'text-white'} />
            <span className={`${activeMenuItem === 3 ? 'primary-txt' : 'text-white'} mt-1.5`}>Chats</span>
          </button>
          <button
            onClick={() => setActiveMenuItem(4)}
            data-target="panel-4"
            className={`${
              activeMenuItem === 4 ? 'dark-shadow' : ''
            } w-full h-full md:py-6 md:m-1.5 flex flex-col items-center justify-center hover:bg-black`}>
            <FaUser className={activeMenuItem === 4 ? 'primary-txt' : 'text-white'} />
            <span className={`${activeMenuItem === 4 ? 'primary-txt' : 'text-white'} mt-1.5`}>Profile</span>
          </button>
        </nav>
      </div>
    </IconContext.Provider>
  );
}

export default NavBar;
