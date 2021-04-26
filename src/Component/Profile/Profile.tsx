import React from 'react';

import { ExploreIcon, HeartIcon, NotificationIcon, ProfileIcon, BackIcon } from '../Utils/Svg/Svgs';

export default function Profile() {
  return (
    <div className="flex flex-col h-100 h-screen">
      <div className="p-3 flex justify-between">
        <BackIcon />
        <h1>My Profile</h1>
        <h1>Edit</h1>
      </div>
      <main className="flex flex-1 justify-center">
        <div className="mt-8 text-center">
          <label
            className="h-24 w-24 flex items-center rounded-full px-4 py-6 bg-white text-blue shadow-lg 
          tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
            <input type="file" className="hidden" />
          </label>
          <span>Drishty</span>
        </div>
      </main>
      <div className="bg-green-300 md:absolute md:w-24 md:h-full md:m-auto md:rounded-r-lg">
        <nav className="tabs flex justify-center text-xs md:flex-col md:items-center md:py-28">
          <button
            data-target="panel-1"
            className="tab active w-1/4 flex flex-col items-center justify-center text-gray-600 py-4 md:py-6
            hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
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
    </div>
  );
}
