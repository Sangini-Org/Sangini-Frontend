import { Button, Link, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './SignUp.module.css';

export default function Signup() {
  return (
    <div className={`text-center flex flex-center flex-col ${styles.baseContainer}`}>
      <h1 className={styles.title}>SignUp</h1>
      <div className={styles.signupContainer}>
        <form>
          <TextField variant="outlined" margin="normal" id="outlined-basic" placeholder="Username" fullWidth />
          <TextField variant="outlined" margin="normal" id="email" placeholder="Email Address" fullWidth />
          <TextField
            variant="outlined"
            margin="normal"
            id="outlined-password-input"
            type="password"
            placeholder="Create Password"
            fullWidth
          />
          <Button className={`btn ${styles.signupBtn}`} type="submit" variant="contained" fullWidth>
            Register
          </Button>
        </form>
        <div className="text-muted">
          <span>Already have an Account? &nbsp;</span>
          <Link href="#">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
