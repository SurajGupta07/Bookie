import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {APPROUTES} from '../types/enums';
import {NavigationParams} from '../types/types';
import {HomeStack, ProfileStack} from './appStack';
import {APP_IMAGES} from '../utils/imageMapper';
import {AImage} from '../components/image/image';
import dimensions from '../utils/dimensions';

const Tab = createBottomTabNavigator<NavigationParams>();

export const AppTabs: FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={APPROUTES.homeStack}
        component={HomeStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <AImage
              image={APP_IMAGES.home}
              imageWidth={dimensions.viewWidth(35)}
              imageHeight={dimensions.viewWidth(35)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={APPROUTES.profileStack}
        component={ProfileStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <AImage
              image={APP_IMAGES.profile}
              imageWidth={dimensions.viewWidth(35)}
              imageHeight={dimensions.viewWidth(35)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
