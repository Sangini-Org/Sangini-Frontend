import React, { useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa';
import ScreenBlockerNotifs from '../Utils/ScreenBlockerNotifs/ScreenBlockerNotifs';
import { axiosConfig, setAxiosAuthToken } from '../../configs/axios';
import { apiEndPoints } from '../../configs/endpoints';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useProfileStore } from '../../stores/useProfileStore';

const ConnectSpotify = () => {
  let history = useHistory();
  const setProfileStatus = useProfileStore((state) => state.setprofileStatus);
  useEffect(() => {
    const code = new URLSearchParams(window?.location.search).get('code');
    console.log(code);
    if (code) {
      spotifyConnect(code);
    }
  }, []);

  const spotifyConnect = async (code) => {
    try {
      setAxiosAuthToken();
      const result = await axiosConfig.post(apiEndPoints.spotifyConnect, { code });
      if (result.status == 200) {
        const updateStatus = await axiosConfig.post(apiEndPoints.userStateUpdate, { updateState: '2' });
        if (updateStatus.status == 200) {
          setProfileStatus(updateStatus.data.data.updateState);
          history.push('/profile/gallery');
          toast.success('your spotify profile has been linked');
          console.log('your spotify profile has been linked', updateStatus);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSpotify = () => {
    const scope = 'user-read-private user-read-email playlist-modify-public';
    window.location = `https://accounts.spotify.com/authorize?client_id=561d6c474d314908a0843348dd671cf2&response_type=code&redirect_uri=http://localhost:3000/spotifyconnect&scope=user-read-private%20user-read-email%20playlist-modify-public`;
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
