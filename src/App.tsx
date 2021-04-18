import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from '../src/theme';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';

function App() {
  // const [state, setstate] = useState()
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SignUp />
      </div>
    </ThemeProvider>
  );
}
export default App;
