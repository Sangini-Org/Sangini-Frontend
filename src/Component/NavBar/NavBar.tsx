import React from 'react';
import { ExploreIcon, HeartIcon, NotificationIcon, ProfileIcon } from '../Utils/Svg/Svgs';

function NavBar() {
  return (
    <div className="bottom-0 bg-purple-300 w-full absolute md:w-36 md:h-full md:m-auto md:rounded-r-lg">
      <nav className="tabs flex justify-center text-xs md:flex-col md:items-center md:py-28">
        <button
          data-target="panel-1"
          className="tab active w-1/4 flex flex-col items-center justify-center text-gray-600 py-4 md:py-6
            hover:text-blue-500 focus:outline-none text-blue-500 font-medium border-blue-500">
          <ExploreIcon />
          <span className="mt-1.5">Explore</span>
        </button>
        <button
          data-target="panel-2"
          className="tab w-1/4 flex flex-col items-center justify-center ext-gray-600 py-4 md:py-6 hover:text-blue-500 focus:outline-none">
          <HeartIcon />
          <span className="mt-1.5">Heart</span>
        </button>
        <button
          data-target="panel-3"
          className="tab w-1/4 flex flex-col items-center justify-center text-gray-600 py-4 md:py-6 hover:text-blue-500 focus:outline-none">
          <NotificationIcon />
          <span className="mt-1.5">Notification</span>
        </button>
        <button
          data-target="panel-3"
          className="tab w-1/4 flex flex-col items-center justify-center text-gray-600 py-4 md:py-6 hover:text-blue-500 focus:outline-none">
          <ProfileIcon />
          <p className="mt-1.5">Profile</p>
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
