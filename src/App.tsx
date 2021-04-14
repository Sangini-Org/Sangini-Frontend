import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from '../src/theme';
import { Button } from '@material-ui/core';
import Login from './Component/Login/Login';

function App() {
  // const [state, setstate] = useState()
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <Login />
          <Button color="primary" variant="contained">
            Testing Material UI Button
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
