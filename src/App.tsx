import React from 'react';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './auth';

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  )
}