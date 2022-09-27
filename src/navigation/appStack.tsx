import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {APPROUTES} from '../types/enums';
import {NavigationParams} from '../types/types';
import {Home} from '../screens/Home/home';
import {Details} from '../screens/Home/Details/details';
import {Profile} from '../screens/Profile/profile';

const Stack = createNativeStackNavigator<NavigationParams>();

export const HomeStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={APPROUTES.home} component={Home} />
      <Stack.Screen name={APPROUTES.details} component={Details} />
    </Stack.Navigator>
  );
};

export const ProfileStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={APPROUTES.profile} component={Profile} />
    </Stack.Navigator>
  );
};

export const AppStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={APPROUTES.homeStack} component={HomeStack} />
      <Stack.Screen name={APPROUTES.profileStack} component={ProfileStack} />
    </Stack.Navigator>
  );
};