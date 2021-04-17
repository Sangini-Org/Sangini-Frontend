import { Button, Container, Divider, InputAdornment, Link, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './SignUp.module.css';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import EmailOutlined from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useForm } from 'react-hook-form';

export default function Signup() {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const signup = () => {
    console.log('Signup complete');
  };
  return (
    <div>
      <Container component="main" className={styles.basecontainer} maxWidth="xs">
        <form onSubmit={signup}>
          <TextField
            className={styles.txtfields}
            variant="outlined"
            margin="normal"
            id="outlined-basic"
            label="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={styles.textfield}
            variant="outlined"
            margin="normal"
            id="email"
            label="Email Address"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={styles.txtfields}
            variant="outlined"
            margin="normal"
            id="outlined-password-input"
            type="password"
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button className={styles.btn} type="submit" variant="contained" fullWidth>
            Signup
          </Button>
        </form>
        <Typography className={styles.typo} align="center">
          Already have an Account?
          <Link href="#" variant="body2">
            Login
          </Link>
        </Typography>
        <Divider variant="middle" />
        <Typography className={styles.typo2} align="center">
          Signup with Social Network
        </Typography>
        <Typography className={styles.typo} align="center">
          <Link href="#" variant="body2" align="center">
            continue
          </Link>
        </Typography>
      </Container>
    </div>
  );
}
