import React, { useState, useEffect } from 'react';
import styles from './SociaLogin.module.css';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

export default function SocialLogin() {
  const [loginUrl, setLoginUrl] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/auth/google/url').then((res) => {
      setLoginUrl(res.data.data);
      console.log(res);
    });
  }, []);
  console.log(loginUrl);
  const googleLoggedIn = (response: any) => {
    console.log(response);
    axios.post('http://localhost:8080/api/auth/google/url').then((res) => {
      setLoginUrl(res.data.data);
      console.log(res);
    });
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
          <a href={loginUrl} className={`rounded w-full uppercase m-1 btn ${styles.google}`}>
            Continue with Google
          </a>
        </div>
      </div>
    </div>
  );
}
