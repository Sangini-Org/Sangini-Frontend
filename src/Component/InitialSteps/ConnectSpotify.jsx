import React, { useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa';
import ScreenBlockerNotifs from '../Utils/ScreenBlockerNotifs/ScreenBlockerNotifs';
import { axiosConfig } from '../../configs/axios';
import { apiEndPoints } from '../../configs/endpoints';

const ConnectSpotify = () => {
  // useEffect(() => {
  //   // if (token) {
  //   //   window.opener.spotifyCallback(token);
  //   // }
  //   // console.log(token);
  // });
  const handleSpotify = () => {
    // var spotifyLoginWindow = window.open(
    //   'https://accounts.spotify.com/authorize?client_id=561d6c474d314908a0843348dd671cf2&redirect_uri=http://localhost:3000/api/callback&response_type=code'
    // );

    let spotifyLoginWindow = window.open(
      `https://accounts.spotify.com/authorize?client_id=561d6c474d314908a0843348dd671cf2&response_type=token&redirect_uri=http://localhost:3000/spotifyconnect`,
      'Login with Spotify',
      'width=800,height=600'
    );
    window.spotifyCallback = (data) => {
      console.log(data);
      spotifyLoginWindow.close();
    };
    // setTimeout(() => {
    //   // console.log(spotifyLoginWindow);
    //   if (spotifyLoginWindow.location.href === 'https://accounts.spotify.com/authorize') {
    //     return;
    //   }
    // }, 2000);
    // setTimeout(() => {
    //   const code = new URLSearchParams(spotifyLoginWindow?.location.search).get('code');
    //   console.log(code);
    //   spotifyLoginWindow?.close();
    // }, 2000);

    // spotifyLoginWindow.onload = function () {

    // };

    // console.log(spotifyLoginWindow);
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
