import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell, FaRegBell, FaHeart, FaRegHeart, FaRegUser, FaUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
function NavBar() {
  const [Hearts, setHearts] = useState(false);
  const [NotificationPanel, setNotificationPanel] = useState(false);
  const [ProfilePanel, setProfilePanel] = useState(false);
  const [ExplorePanel, setExplorePanel] = useState(false);
  return (
    <div className="bottom-0 bg-purple-300 w-full absolute md:w-36 md:h-full md:m-auto md:rounded-r-lg">
      <nav className="tabs flex justify-center text-xs md:flex-col md:items-center md:py-28">
        <button
          onFocus={() => setExplorePanel(true)}
          onBlur={() => setExplorePanel(false)}
          data-target="panel-1"
          className="tab active w-1/4 py-4 md:py-6 flex flex-col items-center justify-center text-gray-600 
          hover:text-white focus:text-white">
          {ExplorePanel ? <FaSearch size="22px" /> : <FiSearch size="22px" />}
          {/* <FaSearch size="22px" color="gray" /> */}
          <span className="mt-1.5">Explore</span>
        </button>
        <button
          onFocus={() => setHearts(true)}
          onBlur={() => setHearts(false)}
          data-target="panel-2"
          className="tab w-1/4 py-4 md:py-6 flex flex-col items-center justify-center text-gray-600 
          hover:text-white focus:text-white">
          {Hearts ? <FaHeart size="22px" /> : <FaRegHeart size="22px" />}
          {/* <FaRegHeart size="22px" /> */}
          <span className="mt-1.5">Heart</span>
        </button>
        <button
          onFocus={() => setNotificationPanel(true)}
          onBlur={() => setNotificationPanel(false)}
          data-target="panel-3"
          className="tab w-1/4 py-4 md:py-6 flex flex-col items-center justify-center text-gray-600           
          hover:text-white focus:text-white">
          {NotificationPanel ? <FaBell size="22px" /> : <FaRegBell size="22px" />}
          {/* <FaRegBell size="22px" /> */}
          <span className="mt-1.5">Notification</span>
        </button>
        <button
          onFocus={() => setProfilePanel(true)}
          onBlur={() => setProfilePanel(false)}
          data-target="panel-3"
          className="tab w-1/4 py-4 md:py-6 flex flex-col items-center justify-center text-gray-600 
          hover:text-white focus:text-white">
          {ProfilePanel ? <FaUser size="22px" /> : <FaRegUser size="22px" />}
          {/* <FaRegUser size="22px" /> */}
          <p className="mt-1.5">Profile</p>
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
