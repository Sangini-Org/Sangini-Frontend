import React from 'react';
import { FaSpotify } from 'react-icons/fa';
import ScreenBlockerNotifs from '../Utils/ScreenBlockerNotifs/ScreenBlockerNotifs';

const ConnectSpotify = () => {
  return (
    <ScreenBlockerNotifs
      icon={FaSpotify}
      btnText={'Connect Your Spotify Account'}
      subText={'You can continue after linking your Spotify account to Sangini.'}
      theme={'primary-bg'}
    />
  );
};

export default ConnectSpotify;
