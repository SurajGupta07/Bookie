import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppTabs} from './bottomTabs';
import {AuthStack} from './authStack';

export const MainNavigator = () => {
  const isUserLoggedIn = true;

  return (
    <NavigationContainer>
      {isUserLoggedIn ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
