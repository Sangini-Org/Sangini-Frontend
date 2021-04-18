import React from 'react';
import styles from './SociaLogin.module.css';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button } from '@material-ui/core';

export default function SocialLogin() {
  return (
    <div className="h-100 flex flex-col flex-center">
      <CancelIcon fontSize="large" className="cancel text" />
      <div className="flex flex-col flex-center">
        <h1 className={styles.sanginiText}>Sangini</h1>
        <h3 className="text">Signup with social media</h3>
        <div className="flex flex-col flex-center">
          <Button className={`btn ${styles.fb}`} variant="contained">
            Continue with Facebook
          </Button>
          <Button className={`btn ${styles.google}`} variant="contained">
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
