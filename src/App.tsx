import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from '../src/theme';
import Landing from './Component/Landing/Landing';
import SocialLogin from './Component/SocialLogin/SocialLogin';

function App() {
  // const [state, setstate] = useState()
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Landing />
        {/* <SocialLogin /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
