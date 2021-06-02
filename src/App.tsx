import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import SocialLogin from './Component/SocialLogin/SocialLogin';
import Profile from './Component/Profile/Profile';
import Explore from './Component/Explore/Explore';
import Notifications from './Component/Notifications/Notifications';
import Landing from './Component/Landing/Landing';
import ResetPassword from './Component/ResetPassword/ResetPassword';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useAuthStore } from '../src/stores/useAuthStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditProfile from './Component/EditProfile/EditProfile';
import ProfileUpdate from './Component/ProfileUpdate/ProfileUpdate';
import ProfileDashboard from './Component/Profile/ProfileDashboard';
import UserVerify from './Component/UserVerify/UserVerify';
import Loader from './Component/Utils/Loaders/Loader';
import NavBar from './Component/NavBar/NavBar';
import OnBoarding from './Component/OnBoarding/OnBoarding';
import GallerySetup from './Component/InitialSteps/GallerySetup';

function App() {
  // const [state, setstate] = useState()
  const userId = useAuthStore((state) => state.userId);
  console.log(userId);

  return (
    <div className="App dark-bg">
      <Router>
        <Route path="/register" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/social-login" exact component={SocialLogin} />
        <Route path="/" exact component={Landing} />
        <Route path="/reset-password" exact component={ResetPassword} />
        <Route path="/userverify" exact component={UserVerify} />
        <Route path="/onboarding" exact component={OnBoarding} />
        <Route path="/update" exact component={ProfileUpdate} />
        {/* {userId ? (
          <>
            <NavBar />
            <Route path="/dashboard" exact component={ProfileDashboard} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/notifications" exact component={Notifications} />
            <Route path="/explore" exact component={Explore} />
            <Route path="/profile/edit" exact component={EditProfile} />
            <Route path="/profile/edit/gallery" exact component={() => <EditProfile showGallery={true} />} />
          </>
        ) : (
          <Redirect to="/" />
        )} */}
        <Route path="/GallerySetup" exact component={GallerySetup} />
        <ToastContainer />
        <ToastContainer hideProgressBar={true} />
      </Router>
    </div>
  );
}
export default App;
