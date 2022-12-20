// Icon Component for Touchable Area

import React from 'react';
import {Pressable} from 'react-native';

import dimensions from '../../utils/dimensions';
import {styles} from './styles';
import {TIcon} from './types';

const Icon: React.FC<TIcon> = ({
  children,
  size = dimensions.viewWidth(30),
  style = {},
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        style,
        {
          width: dimensions.viewWidth(size),
          height: dimensions.viewWidth(size),
        },
      ]}>
      {children}
    </Pressable>
  );
};

export default Icon;
