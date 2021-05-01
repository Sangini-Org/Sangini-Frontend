import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={`h-full text-center flex flex-center mx-auto ${styles.baseContainer}`}>
      <div className="mx-3 lsWrapper rounded min-h-1/2 p-7 flex flex-center flex-col">
        <h1 className={`text-3xl font-medium ${styles.title} mb-4`}>Login</h1>
        <div className="mx-1.5">
          <form>
            <input className="w-full rounded-sm p-3 my-1.5 border-2 border-gray-300" placeholder="Username / Email" />
            <input
              className="w-full rounded-sm p-3 my-1.5 border-2 border-gray-300"
              type="password"
              placeholder="Password"
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
