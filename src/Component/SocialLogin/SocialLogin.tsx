import React, { useState, useEffect } from 'react';
import styles from './SociaLogin.module.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { axiosConfig } from '../../configs/axios';
import { apiEndPoints } from '../../configs/endpoints';
import { toast } from 'react-toastify';
import { useAuthStore } from '../../stores/useAuthStore';

export default function SocialLogin() {
  const setUserId = useAuthStore((state) => state.setUserId);
  const history = useHistory();

  const googleLoggedIn = async (response: any) => {
    try {
      const result = await axiosConfig.post(apiEndPoints.googleSignin, response.profileObj);
      console.log(result);
      if (result.status === 200) {
        localStorage.setItem('token', JSON.stringify(result.data.data.accessToken));
        localStorage.setItem('id', JSON.stringify(result.data.data.user.id));
        setUserId(result.data.data.user.id);
        history.push('/profile');
        toast.success('successfully login');
      }
    } catch (err) {
      toast.error(err.response.data.metadata.message);
    }
  };
  const errorGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <div className="h-full flex flex-col flex-center">
      <div className={`flex flex-col flex-center ${styles.baseContainer}`}>
        <h1 className={`font-bold ${styles.sanginiText}`}>Sangini</h1>
        <h3 className="font-normal text-xl text mb-6">Signup with social media</h3>
        <div className="w-full flex flex-col flex-center">
          <button className={`rounded w-full uppercase m-1 btn ${styles.fb}`}>Continue with Facebook</button>
          <GoogleLogin
            clientId="812836693680-ift7r4mbe93bnlekml89e3t8p1g3g2lj.apps.googleusercontent.com"
            buttonText="Google Login"
            onSuccess={googleLoggedIn}
            onFailure={errorGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </div>
  );
}
