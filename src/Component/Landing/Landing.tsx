import React from 'react';
import useState from 'react';
import styles from './Landing.module.css';
import { Button, FormControl, MenuItem, Select, InputLabel, Box } from '@material-ui/core';
import one from '../../images/2.jpg';

function Navbar() {
  const [language, setLanguage] = React.useState([]);
  const handleLanguage = (e: any) => {
    setLanguage(e.target.value);
  };
  return (
    <div className={`${styles.navbar} w-100 flex flex-space-bw`}>
      <span className={`sanginiText ${styles.sanginiSpan}`}>sangini</span>
      <FormControl className={styles.dropdown}>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select value={language} onChange={handleLanguage}>
          <MenuItem value={'hindi'}>Hindi</MenuItem>
          <MenuItem value={'english'}>English</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default function SocialLogin() {
  return (
    <div className="h-100 w-100">
      <img src={one} className={`w-100 h-100 absolute ${styles.landingImg}`} />
      <div className={`absolute w-100 h-100 ${styles.dark}`} />
      <Navbar />
      <Box className={`${styles.buttonsWrapper} w-100 h-100 absolute flex flex-col flex-center`}>
        <Button className={`btn ${styles.signup}`} variant="contained">
          Signup
        </Button>
        <Button className={`btn ${styles.login}`} variant="contained">
          Login
        </Button>
        <Button className={`btn ${styles.social}`} variant="contained">
          Continue with social media
        </Button>
      </Box>
    </div>
  );
}
