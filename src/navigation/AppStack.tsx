import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home/Home';
import {Details} from '../screens/Home/Details/Details';
import {Profile} from '../screens/Profile/Profile';

type NavigationParams = {
  Home: undefined;
  Details: undefined;
  HomeStack: undefined;
  Profile: undefined;
  ProfileStack: undefined;
};

const Stack = createNativeStackNavigator<NavigationParams>();

export const HomeStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export const ProfileStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export const AppStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
    </Stack.Navigator>
  );
};
