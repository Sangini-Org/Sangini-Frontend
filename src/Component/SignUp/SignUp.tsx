import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { axiosConfig } from '../../configs/axios';
import apiEndPoints from '../../configs/endpoints';

type LoginData = {
  username: string;
  password: string;
  email: string;
};
export default function SignUp() {
  const { handleSubmit, register } = useForm<LoginData>();

  const onSubmit = async (data: LoginData): Promise<any> => {
    try {
      const result = await axiosConfig.post(apiEndPoints.signup, data);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={`h-full text-center flex flex-center mx-auto ${styles.baseContainer}`}>
      <div className="lsWrapper rounded h-3/6 px-7 flex flex-center flex-col">
        <h1 className={`text-3xl font-medium ${styles.title} mb-4`}>Sign Up</h1>
        <div className="mx-1.5">
          <form>
            <input
              className="w-full rounded-sm p-3 my-1.5 border-2 border-gray-300"
              id="outlined-basic"
              placeholder="Username"
            />
            <input
              className="w-full rounded-sm p-3 my-1.5 border-2 border-gray-300"
              id="email"
              placeholder="Email Address"
            />
            <input
              className="w-full rounded-sm p-3 my-1.5 border-2 border-gray-300"
              id="outlined-password-input"
              type="password"
              placeholder="Create Password"
            />
            <button className={`rounded-sm w-full my-3 rounded-none btn ${styles.signupBtn}`} type="submit">
              Register
            </button>
          </form>
          <div className="text-muted">
            <span>Already have an Account? &nbsp;</span>
            <Link to="login" className="active">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}