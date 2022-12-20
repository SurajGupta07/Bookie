import React, {FC} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationParams} from "../types/types";
import {APPROUTES} from "../types/enums";
import {Login} from "../screens/Login/login";

const Stack = createNativeStackNavigator<NavigationParams>();

export const AuthStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={APPROUTES.login}
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
