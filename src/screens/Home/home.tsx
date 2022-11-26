import React from 'react';
import {Button, Text, View} from 'react-native';

import {THome} from './types';
import {styles} from './style';
import {APPROUTES} from '../../types/enums';
import {API_URL} from '@env';
import {APP_IMAGES} from '../../utils/imageMapper';
import {AImage} from '../../components/image/image';
import dimensions from '../../utils/dimensions';

export const Home: React.FC<THome> = ({navigation}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Home {'Testing eslint'}</Text>
      <Text>
        env example {'->'} {API_URL}
      </Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate(APPROUTES.details)}
      />
      <AImage
        image={APP_IMAGES.booking}
        imageWidth={dimensions.viewWidth(200)}
        imageHeight={dimensions.viewWidth(200)}
      />
    </View>
  );
};
