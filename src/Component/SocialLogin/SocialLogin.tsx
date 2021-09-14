import React from 'react';
import styles from './SocialLogin.module.css';
import { Link, useHistory } from 'react-router-dom';
import { FaFacebook, FcGoogle, FiCheck, FaEye, FaEyeSlash } from 'react-icons/all';
import axios from 'axios';
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
    } catch (err: any) {
      toast.error(err.response.data.metadata.message);
    }
  };
  const errorGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <div className="flex flex-row justify-evenly text-4xl my-6">
      <Link to="/">
        <FaFacebook className={`w-9 h-9 ${styles.icon}`} style={{ fill: '#0000FF' }} />
      </Link>
      <Link to="/">
        <button>
          <GoogleLogin
            className={`w-9 h-9 ${styles.icon}`}
            clientId="812836693680-ift7r4mbe93bnlekml89e3t8p1g3g2lj.apps.googleusercontent.com"
            buttonText=""
            onSuccess={googleLoggedIn}
            onFailure={errorGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </button>
      </Link>
    </div>
  );
}
