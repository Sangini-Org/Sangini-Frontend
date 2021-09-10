import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import Explore from './Component/Explore/Explore';
import Notifications from './Component/Notifications/Notifications';
import ResetPassword from './Component/ResetPassword/ResetPassword';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useAuthStore } from './stores/useAuthStore';
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
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { useProfileStore } from './stores/useProfileStore';
import { setAxiosAuthToken } from './configs/axios';
import Profile from './Component/Profile/Profile';
import Favourites from './Component/Favourites/Favourites';

function App() {
  // const [state, setstate] = useState()
  const profileStatus = useProfileStore((state) => state.profileStatus);
  const userId = useAuthStore((state) => state.userId);

  useEffect(() => {
    setAxiosAuthToken();
  }, [profileStatus, userId]);

  return (
    <div className="App dark-bg pb-20 md:pb-0">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <ProtectedRoute path="/profile/update" exact component={ProfileUpdate} />
          <ProtectedRoute path="/profile/updated" exact component={ProfileUpdated} />
          <ProtectedRoute path="/profile/gallery" exact component={GallerySetup} />
          <ProtectedRoute path="/spotifyconnect" exact component={ConnectSpotify} />
          <ProtectedRoute path="/emailverify" exact component={EmailVerify} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute path="/profile" exact component={Profile} />
          <ProtectedRoute path="/favourites" exact component={Favourites} />
          <ProtectedRoute path="/reset-password" exact component={ResetPassword} />
          <ProtectedRoute path="/notifications" exact component={Notifications} />
          <ProtectedRoute path="/recommendations" exact component={Recommendations} />
          <ProtectedRoute exact path="/explore" component={Explore} />
        </Switch>
        <ToastContainer />
        <ToastContainer hideProgressBar={true} />
        {userId && profileStatus === '2' ? <NavBar /> : ''}
      </Router>
    </div>
  );
}

export default App;
