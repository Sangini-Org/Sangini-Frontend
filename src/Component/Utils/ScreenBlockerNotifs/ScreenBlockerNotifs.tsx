import React from 'react';
import { IconType } from 'react-icons';

type notifArgs = {
  icon: IconType;
  btnText: string;
  subText: string;
  theme: string;
};

function ScreenBlockerNotifs({ icon, btnText, subText, theme }: notifArgs) {
  const Icon = icon;
  return (
    <div
      className="z-50 fixed flex flex-center z-10 w-full h-full inset-0 m-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="w-full flex justify-center min-h-screen text-center">
        <div
          className="fixed h-full inset-0 dark-sec-bg opacity-80 bg-opacity-90 transition-opacity"
          aria-hidden="true"></div>
        <div className="w-full flex flex-col flex-center transform transition-all">
          <button className={`py-4 rounded-full w-80 font-bold flex flex-center ${theme}`}>
            <Icon className="mr-4" size="1.5rem" />
            <span>{btnText}</span>
          </button>
          <p className="text-white p-4 font-bold">{subText}</p>
        </div>
      </div>
    </div>
  );
}

export default ScreenBlockerNotifs;
