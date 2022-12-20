// Custome Header Component to render on screen

import React from "react";
import {Pressable, Text, View} from "react-native";

import {styles} from "./styles";
import {TCustomerHeaderProps} from "./types";

export const CustomHeader: React.FC<TCustomerHeaderProps> = ({
  title,
  subTitle,
  actionIcons,
}) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
      <View style={[styles.row, styles.justifyEnd]}>
        {actionIcons?.map(icon => (
          <Pressable onPress={icon.onClick}>{icon.component}</Pressable>
        ))}
      </View>
    </View>
  );
};
