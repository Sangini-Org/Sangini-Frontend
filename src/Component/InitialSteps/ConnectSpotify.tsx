import React from 'react';
import { FaSpotify } from 'react-icons/fa';
import ScreenBlockerNotifs from '../Utils/ScreenBlockerNotifs/ScreenBlockerNotifs';
import { axiosConfig } from '../../configs/axios';
import { apiEndPoints } from '../../configs/endpoints';

const ConnectSpotify = () => {
  const handleSpotify = async (): Promise<any> => {
    try {
      const result = await axiosConfig.get(apiEndPoints.spotifyConnect);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScreenBlockerNotifs
      icon={FaSpotify}
      btnText={'Connect Your Spotify Account'}
      subText={'You can continue after linking your Spotify account to Sangini.'}
      theme={'primary-bg'}
      handleClick={handleSpotify}
    />
  );
};

export default ConnectSpotify;
