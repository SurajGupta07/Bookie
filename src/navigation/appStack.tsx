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
      <Stack.Screen
        name={APPROUTES.home}
        component={Home}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name={APPROUTES.details}
        component={Details}
        options={{animation: 'slide_from_right'}}
      />
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
