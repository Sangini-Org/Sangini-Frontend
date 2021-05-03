import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import SocialLogin from './Component/SocialLogin/SocialLogin';
import Profile from './Component/Profile/Profile';
import Landing from './Component/Landing/Landing';
import ResetPassword from './Component/ResetPassword/ResetPassword';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useAuthStore } from '../src/stores/useAuthStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditProfile from './Component/EditProfile/EditProfile';

function App() {
  // const [state, setstate] = useState()
  const userId = useAuthStore((state) => state.userId);
  console.log(userId);

  return (
    <div className="App">
      <Router>
        <Route path="/register" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/social-login" exact component={SocialLogin} />
        <Route path="/" exact component={Landing} />
        <Route path="/reset-password" exact component={ResetPassword} />
        {userId ? (
          <div>
            <Route path="/profile" exact component={Profile} />
            <Route path="/profile/edit" exact component={EditProfile} />
          </div>
        ) : (
          <Redirect to="/" />
        )}
        <ToastContainer />
      </Router>
    </div>
  );
}
export default App;
