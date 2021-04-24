import React, { useState } from 'react';
import styles from './SignUp.module.css';

export default function SignUp() {
  return (
    <div className={`text-center flex flex-center flex-col my-10 mx-auto ${styles.baseContainer}`}>
      <h1 className={`text-3xl font-normal ${styles.title} mb-4`}>Sign Up</h1>
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
          <a className="active" href="#">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
