import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { axiosConfig } from '../../configs/axios';
import { apiEndPoints } from '../../configs/endpoints';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type SignUpData = {
  username: string;
  password: string;
  email: string;
};
export default function SignUp() {
  const { handleSubmit, register } = useForm<SignUpData>();
  const history = useHistory();

  const onSubmit = async (data: SignUpData): Promise<any> => {
    try {
      const result = await axiosConfig.post(apiEndPoints.signup, data);
      if (result.status === 200) {
        history.push('/login');
        toast.success('successfully registered!');
      }
    } catch (err) {
      toast.error(err.response.data.metadata.message);
    }
  };
  return (
    <div className={`h-full text-center flex flex-center mx-auto ${styles.baseContainer}`}>
      <div className="mx-3 lsWrapper rounded min-h-1/2 p-7 flex flex-center flex-col">
        <h1 className={`text-3xl font-medium ${styles.title} mb-4`}>Sign Up</h1>
        <div className="mx-1.5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-full rounded-sm p-3 my-1.5 border-2 border-gray-300"
              id="outlined-basic"
              placeholder="Username"
              required
              {...register('username')}
            />
            <input
              className="w-full rounded-sm p-3 my-1.5 border-2 border-gray-300"
              id="email"
              placeholder="Email Address"
              required
              {...register('email')}
            />
            <input
              className="w-full rounded-sm p-3 my-1.5 border-2 border-gray-300"
              id="outlined-password-input"
              type="password"
              placeholder="Create Password"
              required
              {...register('password')}
            />
            <button className={`rounded-md w-full my-3 btn ${styles.signupBtn}`} type="submit">
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
