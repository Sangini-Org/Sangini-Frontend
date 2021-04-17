import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from '../src/theme';
import SocialLogin from './Component/SocialLogin/SocialLogin';
import Signup from './Component/SignUp/Signup';
function App() {
  // const [state, setstate] = useState()
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Signup />
      </div>
    </ThemeProvider>
  );
}
export default App;
