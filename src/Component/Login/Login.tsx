import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { axiosConfig } from '../../configs/axios';
import { apiEndPoints } from '../../configs/endpoints';
import { useAuthStore } from '../../stores/useAuthStore';
import { toast } from 'react-toastify';
import { FiCheck, FaEye, FaEyeSlash } from 'react-icons/all';
import SocialLogin from '../SocialLogin/SocialLogin';

type LoginData = {
  userInput: string;
  password: string;
};

export default function Login() {
  const [eye, setEye] = useState(false);
  const setUserId = useAuthStore((state) => state.setUserId);
  const userId = useAuthStore((state) => state.userId);
  console.log(userId);

  const { handleSubmit, register } = useForm<LoginData>();
  const history = useHistory();

  const profileStatusRedirect = (state: string) => {
    switch (state) {
      // define constants in different util files

      // new loggedIn user
      case '0':
        history.push('/profile/update');
        break;

      // user submitted basic information
      case '1':
        history.push('/spotifyconnect');
        break;

      // user connected with spotify
      case '2':
        history.push('/profile/gallery');
        break;

      // profile completed
      case '3':
        history.push('/recommendations');
        break;

      default:
        break;
    }
  };

  const onSubmit = async (data: LoginData): Promise<any> => {
    try {
      const result = await axiosConfig.post(apiEndPoints.signin, data);
      if (result.status === 200) {
        localStorage.setItem('token', JSON.stringify(result.data.data.accessToken));
        localStorage.setItem('id', JSON.stringify(result.data.data.user.id));
        setUserId(result.data.data.user.id);
        toast.success('successfully login');
        profileStatusRedirect(result.data.data.user.userLoginState);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.metadata.message);
    }
  };

  return (
    <div className={`min-h-full px-4 py-8 mx-auto flex flex-center ${styles.baseContainer}`}>
      <div className="lsWrapper flex px-3 md:px-6 py-10 rounded-md flex-center flex-col w-full">
        <h1 className="text-3xl font-medium mb-6 primary-txt font-bold px-2">Sign in</h1>
        <div className="w-full px-3 md:px-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="" className="text-sm px-1 text-white">
              Username or email
            </label>
            <div className="w-full relative flex justify-end items-center mt-1 mb-4">
              <input
                className="w-full px-4 py-3 rounded-md"
                id="outlined-basic"
                placeholder="Enter your email or username"
                required
                {...register('userInput')}
              />
              <FiCheck className="absolute right-6 text-xl" />
            </div>
            <label htmlFor="" className="text-sm px-1 text-white">
              Password
            </label>
            <div className="w-full relative flex justify-end items-center mt-1 mb-1">
              <input
                className="w-full px-4 py-3 rounded-md"
                id="outlined-password-input"
                type={eye ? 'text' : 'password'}
                placeholder="Password"
                required
                {...register('password')}
              />
              {eye ? (
                <FaEyeSlash onClick={() => setEye(false)} className="cursor-pointer absolute right-6 text-lg" />
              ) : (
                <FaEye onClick={() => setEye(true)} className="cursor-pointer absolute right-6 text-lg" />
              )}
            </div>
            <Link to="reset-password" className="primary-txt text-sm px-1">
              Forgot Password?
            </Link>
            <button className="w-full py-3 my-4 uppercase primary-bg text-md rounded-md" type="submit">
              Sign in
            </button>
          </form>
          <div className="px-2 text-muted text-center">
            <h2 className={`overflow-hidden my-2 text-sm text-white ${styles.bottom}`}>or sign in with</h2>
            <SocialLogin />
            <span className="text-white">Don't have an account? &nbsp;</span>
            <Link to="/register" className="primary-txt">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
