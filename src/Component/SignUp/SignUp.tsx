import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { Link, useHistory } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import { axiosConfig } from '../../configs/axios';
import { apiEndPoints } from '../../configs/endpoints';
import { toast } from 'react-toastify';
import { FiCheck, FaEye, FaEyeSlash } from 'react-icons/all';
import money from '../Utils/Images/Money.png';
import axios from 'axios';

export default function SignUp() {
  const [eye, setEye] = useState(false);
  return (
    <div className={`min-h-full px-4 py-8 mx-auto flex flex-center ${styles.baseContainer}`}>
      <div className="lsWrapper flex px-3 md:px-6 py-10 rounded-md flex-center flex-col w-full">
        <h1 className="text-3xl font-medium primary-txt mb-8 font-bold px-2">Sign up</h1>
        <div className="w-full">
          <form>
            <label htmlFor="" className="px-1 text-sm text-white">
              Username or email
            </label>
            <div className="w-full relative flex justify-end items-center mt-1 mb-4">
              <input
                className="w-full px-4 py-3 rounded-md"
                id="outlined-basic"
                placeholder="Enter your email address"
                required
              />
              <FiCheck className="absolute right-6 text-xl" />
            </div>
            <label htmlFor="" className="px-1 text-sm text-white">
              Password
            </label>
            <div className="w-full relative flex justify-end items-center mt-1 mb-4">
              <input
                className="w-full px-4 py-3 rounded-md"
                id="outlined-password-input"
                type={eye ? 'text' : 'password'}
                placeholder="Password"
                required
              />
              {eye ? (
                <FaEyeSlash onClick={() => setEye(false)} className="cursor-pointer absolute right-6 text-md" />
              ) : (
                <FaEye onClick={() => setEye(true)} className="cursor-pointer absolute right-6 text-md" />
              )}
            </div>
            <label htmlFor="" className="px-1 text-sm text-white">
              Confirm Password
            </label>
            <div className="w-full relative flex justify-end items-center mt-1 mb-4">
              <input
                className="w-full px-4 py-3 rounded-md"
                id="outlined-password-input"
                type={eye ? 'text' : 'password'}
                placeholder="Re enter password"
                required
              />
              {eye ? (
                <FaEyeSlash onClick={() => setEye(false)} className="cursor-pointer absolute right-6 text-md" />
              ) : (
                <FaEye onClick={() => setEye(true)} className="cursor-pointer absolute right-6 text-md" />
              )}
            </div>
            <button className="w-full py-3 my-5 uppercase primary-bg text-md rounded-md" type="submit">
              Sign up
            </button>
          </form>
          <div className="px-2 text-muted text-center">
            <h2 className={`overflow-hidden my-4 text-sm text-white ${styles.bottom}`}>or sign up with</h2>
            <SocialLogin />
            <span className="text-white">You have an account ? &nbsp;</span>
            <Link to="/login" className="primary-txt">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
