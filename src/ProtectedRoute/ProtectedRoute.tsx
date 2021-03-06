import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthStore } from '../../src/stores/useAuthStore';

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  const userId = useAuthStore((state) => state.userId);
  console.log('userId', userId);
  if (!userId) {
    console.log('userId is null');
    return <Redirect to="/login" />;
  }
  return <Route path={props.path} exact={props.exact} component={props.component} />;
};
export default PrivateRoute;
