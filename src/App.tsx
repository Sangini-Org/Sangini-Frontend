import React, { useState } from 'react';
import './App.css';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import SocialLogin from './Component/SocialLogin/SocialLogin';
import Profile from './Component/Profile/Profile';
import Landing from './Component/Landing/Landing';
import ResetPassword from './Component/ResetPassword/ResetPassword';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  // const [state, setstate] = useState()
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/social-login" exact component={SocialLogin} />
          <Route path="/" exact component={Landing} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/reset-password" exact component={ResetPassword} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
