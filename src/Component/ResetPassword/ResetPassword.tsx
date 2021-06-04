import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ResetPassword.module.css';

export default function ResetPassword() {
  const [password, setPassword] = useState('');

  return (
    <div className={`h-full text-center flex flex-center mx-auto ${styles.baseContainer}`}>
      <div className="mx-3 lsWrapper rounded min-h-1/3 p-7 flex flex-center flex-col">
        <h1 className="text-2xl font-bold mb-4 primary-txt">Reset Password</h1>
        <div className="mx-1.5">
          <form>
            <input className="outline-0 w-full rounded-md p-3 my-2" placeholder="Enter your email" />
            <button className="rounded-md w-full my-3 py-3 primary-bg" type="submit">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
