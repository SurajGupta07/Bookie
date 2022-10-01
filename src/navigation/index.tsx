import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppTabs} from './bottomTabs';
import {AuthStack} from './authStack';

export const MainNavigator: FC = () => {
  const isUserLoggedIn = true;

  return (
    <NavigationContainer>
      {isUserLoggedIn ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
