import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { axiosConfig } from '../../configs/axios';
import { apiEndPoints } from '../../configs/endpoints';
import { useAuthStore } from '../../stores/useAuthStore';

type LoginData = {
  username: string;
  password: string;
};

export default function Login() {
  const [checked, setChecked] = React.useState(false);
  const setUserId = useAuthStore((state) => state.setUserId);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const { handleSubmit, register } = useForm<LoginData>();
  const history = useHistory();

  const onSubmit = async (data: LoginData): Promise<any> => {
    try {
      const result = await axiosConfig.post(apiEndPoints.signin, data);
      if (result.status === 200) {
        localStorage.setItem('token', JSON.stringify(result.data.data.accessToken));
        localStorage.setItem('id', JSON.stringify(result.data.data.user.id));
        setUserId(result.data.data.user.id);
        history.push('/profile');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`h-full text-center flex flex-center mx-auto ${styles.baseContainer}`}>
      <div className="mx-3 lsWrapper rounded min-h-1/2 p-7 flex flex-center flex-col">
        <h1 className={`text-3xl font-medium ${styles.title} mb-4`}>Login</h1>
        <div className="mx-1.5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-full rounded-sm p-3 my-1.5 border-2 border-gray-300"
              placeholder="Username / Email"
              {...register('username')}
            />
            <input
              className="w-full rounded-sm p-3 my-1.5 border-2 border-gray-300"
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            <div className="my-2.5 flex flex-space-bw">
              <p>
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label className="ml-2 font-light" htmlFor="rememberMe">
                  Remember me
                </label>
              </p>
              <Link className="active" to="/reset-password">
                Forgot Password?
              </Link>
            </div>
            <button className={`rounded-sm btn w-full my-3 rounded-none ${styles.loginBtn}`} type="submit">
              Login
            </button>
          </form>
          <div className="text-muted">
            <span>Don't have an account? &nbsp;</span>
            <Link to="/register" className="active">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
