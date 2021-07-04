import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import Explore from './Component/Explore/Explore';
import Notifications from './Component/Notifications/Notifications';
import ResetPassword from './Component/ResetPassword/ResetPassword';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useAuthStore } from '../src/stores/useAuthStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileUpdate from './Component/ProfileUpdate/ProfileUpdate';
import Loader from './Component/Utils/Loaders/Loader';
import NavBar from './Component/NavBar/NavBar';
import Recommendations from './Component/Recommendations/Recommendations';
import ProfileUpdated from './Component/ProfileUpdate/ProfileUpdated';
import Landing from './Component/Landing/Landing';
import GallerySetup from './Component/InitialSteps/GallerySetup';
import ConnectSpotify from './Component/InitialSteps/ConnectSpotify';
import EmailVerify from './Component/InitialSteps/EmailVerify';
import Dashboard from './Component/Dashboard/Dashboard';
import Profile from './Component/Profile/Profile';
import Favourites from './Component/Favourites/Favourites';

function App() {
  // const [state, setstate] = useState()
  const userId = useAuthStore((state) => state.userId);
  console.log(userId);

  return (
    <div className="App dark-bg pb-20 md:pb-0">
      <Router>
        <Route path="/register" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/reset-password" exact component={ResetPassword} />
        <Route path="/" exact component={Landing} />
        {userId ? (
          <>
            <Route path="/favourites" exact component={Favourites} />
            <NavBar />
            <Route path="/notifications" exact component={Notifications} />
            <Route path="/recommendations" exact component={Recommendations} />
            <Route path="/explore" exact component={Explore} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/profile/update" exact component={ProfileUpdate} />
            <Route path="/profile/updated" exact component={ProfileUpdated} />
            <Route path="/profile/gallery" exact component={GallerySetup} />
            <Route path="/spotifyconnect" exact component={ConnectSpotify} />
            <Route path="/emailverify" exact component={EmailVerify} />
            <Route path="/favourites" exact component={Favourites} />
          </>
        ) : (
          <Redirect to="/" />
        )}
        <ToastContainer />
        <ToastContainer hideProgressBar={true} />
      </Router>
    </div>
  );
}

export default App;
