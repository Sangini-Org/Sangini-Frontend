import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ResetPassword.module.css';

export default function ResetPassword() {
  const [password, setPassword] = useState('');

  return (
    <div className={`h-full text-center flex flex-center mx-auto ${styles.baseContainer}`}>
      <div className="mx-3 lsWrapper rounded min-h-1/3 p-7 flex flex-center flex-col">
        <h1 className={`text-3xl font-medium ${styles.title} mb-4`}>Reset Password</h1>
        <div className="mx-1.5">
          <form>
            <input
              className="w-full rounded-sm p-3 my-1.5 border-2 border-gray-300"
              id="outlined-basic"
              placeholder="Enter your email"
            />
            <button className={`rounded-sm w-full my-3 rounded-none btn ${styles.resetBtn}`} type="submit">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
