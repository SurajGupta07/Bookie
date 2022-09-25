import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {MainNavigator} from './navigation';

const App = () => {
  return <MainNavigator />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
