import React, {FC} from "react";
import {Text, View} from "react-native";

import {styles} from "./style";

export const Login: FC = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Login</Text>
    </View>
  );
};
