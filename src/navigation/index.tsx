import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {AppTabs} from './BottomTabs';

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};
