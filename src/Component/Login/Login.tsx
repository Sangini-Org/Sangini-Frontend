import { Button, Link, TextField, Switch, FormGroup, FormControlLabel, Box } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './Login.module.css';

export default function Signup() {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={`text-center flex flex-center flex-col ${styles.baseContainer}`}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.loginContainer}>
        <form>
          <TextField variant="outlined" margin="normal" id="outlined-basic" placeholder="Username / Email" fullWidth />
          <TextField
            variant="outlined"
            margin="normal"
            id="outlined-password-input"
            type="password"
            placeholder="Password"
            fullWidth
          />
          <Box mt={2} mb={2} className="flex flex-space-bw">
            <FormGroup>
              <FormControlLabel
                control={<Switch color="primary" size="small" checked={checked} onChange={toggleChecked} />}
                label="Remember me"
              />
            </FormGroup>
            <Link href="#">Forgot Password?</Link>
          </Box>
          <Button className={`btn ${styles.loginBtn}`} type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </form>
        <div className="text-muted">
          <span>Don't have an account? &nbsp;</span>
          <Link href="#">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
