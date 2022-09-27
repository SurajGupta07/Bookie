import React from 'react';
import {Button, Text, View} from 'react-native';
import {THome} from './types';
import {styles} from './style';
import {APPROUTES} from '../../types/enums';
import {API_URL} from '@env';

export const Home: React.FC<THome> = ({navigation}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Home</Text>
      <Text>
        env example {'->'} {API_URL}
      </Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate(APPROUTES.details)}
      />
    </View>
  );
};
