import { Button, Link, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './SignUp.module.css';

export default function Signup() {
  return (
    <>
      <div className={styles.basecontainer}>
        <div className={styles.title}>SignUp</div>
        <div className={styles.signupcontainer}>
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
            <Button className={styles.btn} type="submit" variant="contained" fullWidth>
              Register
            </Button>
          </form>
          <div className={styles.typo}>
            You have an Account? &nbsp;
            <Link href="#" variant="body1">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
