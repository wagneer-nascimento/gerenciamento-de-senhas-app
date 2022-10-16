import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useAuth } from '../auth/auth';
import RoutesNoPrivate from './routes.no.private';
import RoutesPrivate from './routes.private.screens';

const Routes: React.FC = () => {
  // const { user } = useAuth();

  // useEffect(() => {
  // SplashScreen.hide();
  //}, []);
  const user = true;
  return user ? <RoutesPrivate /> : <RoutesNoPrivate />;
}

export default Routes;