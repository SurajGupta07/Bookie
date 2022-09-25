import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack, ProfileStack} from './AppStack';

type NavigationParams = {
  HomeStack: undefined;
  ProfileStack: undefined;
};

const Tab = createBottomTabNavigator<NavigationParams>();

export const AppTabs: FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};
