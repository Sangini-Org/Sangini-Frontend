import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Login from './Component/Login/Login';

function App() {
  // const [state, setstate] = useState()
  return (
    <div className="App">
      <div>
        <Button color="primary" variant="contained">
          Testing Material UI Button
        </Button>
      </div>
    </div>
  );
}

export default App;
