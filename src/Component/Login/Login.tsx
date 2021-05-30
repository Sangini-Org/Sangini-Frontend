import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { axiosConfig } from '../../configs/axios';
import { apiEndPoints } from '../../configs/endpoints';
import { useAuthStore } from '../../stores/useAuthStore';
import { toast } from 'react-toastify';
import { FaFacebook, FcGoogle, FiCheck, BsFillEyeSlashFill } from 'react-icons/all';

export default function Login() {
  return (
    <div className={`h-full flex mx-auto ${styles.baseContainer}`}>
      <div className="w-full mx-3 min-h-1/2 p-7 flex flex-col">
        <h2 className="flex flex-center h-28 text-white">Sangini</h2>
        <h1 className={`text-3xl font-medium text-white mb-10`}>Sign in</h1>
        <div className="mx-1.5">
          <form>
            <label htmlFor="" className="text-white">
              Username or email
            </label>
            <div className="w-full relative flex justify-end items-center text-white my-4">
              <input
                className={`w-full h-20 px-6 md:h-14 ${styles.input}`}
                id="outlined-basic"
                placeholder="Enter your email address"
                required
              />
              <FiCheck className="absolute right-4 text-2xl md:text-3xl" />
            </div>
            <label htmlFor="" className="text-white">
              Password
            </label>
            <div className="w-full relative flex justify-end items-center text-white my-4">
              <input
                className={`w-full h-20 px-6 md:h-14 ${styles.input}`}
                id="outlined-password-input"
                type="password"
                placeholder="Password"
                required
              />
              <BsFillEyeSlashFill className="absolute right-4 text-2xl md:text-3xl" />
            </div>
            <button className={`w-full h-20 my-3 font-bold rounded-2xl md:h-14 ${styles.signupBtn}`} type="submit">
              Sign in
            </button>
          </form>
          <div className="text-muted text-center">
            <h2 className={`overflow-hidden my-4 text-white ${styles.bottom}`}>or sign in with</h2>
            <div className="flex flex-row justify-evenly text-4xl my-8">
              <Link to="/">
                <FaFacebook className={`${styles.icon}`} style={{ fill: '#0000FF' }} />
              </Link>
              <Link to="/">
                <FcGoogle className={`${styles.icon}`} />
              </Link>
            </div>
            <span className="active">Don't you have an account ? &nbsp;</span>
            <Link to="/register" className="active">
              Sign in now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
