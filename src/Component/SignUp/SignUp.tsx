import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { axiosConfig } from '../../configs/axios';
import { apiEndPoints } from '../../configs/endpoints';
import { toast } from 'react-toastify';
import { FaFacebook, FcGoogle, FiCheck, AiOutlineEye } from 'react-icons/all';
import money from '../Utils/Images/Money.png';

export default function SignUp() {
  return (
    <div className={`h-full flex mx-auto p-3 flex flex-col ${styles.baseContainer}`}>
      <img src={money} className="w-16 h-auto mx-auto my-10" alt="icon" />
      <h1 className="text-3xl font-medium text-white mb-8 font-bold px-2">Sign up</h1>
      <div className="px-1">
        <form>
          <label htmlFor="" className="px-1 text-white">
            Username or email
          </label>
          <div className="w-full relative flex justify-end items-center text-white mt-4 mb-8">
            <input
              className="text-white w-full px-6 py-4 dark-sec-bg rounded-full"
              id="outlined-basic"
              placeholder="Enter your email address"
              required
            />
            <FiCheck className="absolute right-6 text-xl" />
          </div>
          <label htmlFor="" className="text-white">
            Password
          </label>
          <div className="w-full relative flex justify-end items-center text-white mt-4 mb-4">
            <input
              className="text-white w-full px-6 py-4 dark-sec-bg rounded-full"
              id="outlined-password-input"
              type="password"
              placeholder="Password"
              required
            />
            <AiOutlineEye className="absolute right-6 text-xl" />
          </div>
          <label htmlFor="" className="text-white">
            Confirm Password
          </label>
          <div className="w-full relative flex justify-end items-center text-white mt-4 mb-4">
            <input
              className="text-white w-full px-6 py-4 dark-sec-bg rounded-full"
              id="outlined-password-input"
              type="password"
              placeholder="Re enter password"
              required
            />
            <AiOutlineEye className="absolute right-6 text-xl" />
          </div>
          <button className="w-full py-5 my-5 font-bold rounded-2xl primary-bg text-xl rounded-full" type="submit">
            Sign up
          </button>
        </form>
        <div className="px-2 text-muted text-center">
          <h2 className={`overflow-hidden my-4 text-white ${styles.bottom}`}>or sign up with</h2>
          <div className="flex flex-row justify-evenly text-4xl my-10">
            <Link to="/">
              <FaFacebook className={`w-9 h-9 ${styles.icon}`} style={{ fill: '#0000FF' }} />
            </Link>
            <Link to="/">
              <FcGoogle className={`w-9 h-9 ${styles.icon}`} />
            </Link>
          </div>
          <span className="text-white">You have an account ? &nbsp;</span>
          <Link to="/login" className="primary-txt">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
