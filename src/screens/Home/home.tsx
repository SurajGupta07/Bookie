import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {THome} from './types';
import {styles} from './style';
import {APPROUTES, LANGUAGES} from '../../types/enums';
import {API_URL} from '@env';
import {APP_IMAGES} from '../../utils/imageMapper';
import {ImageRenderer} from '../../components/image/image';
import dimensions from '../../utils/dimensions';
import {AppDispatch} from '../../redux/store';
import {getLanguage} from '../../redux/features/language/languageSelectors';
import {setLanguage} from '../../redux/features/language/languageSlice';

export const Home: React.FC<THome> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const language = useSelector(getLanguage);

  const disptachSetLanguage = (selectedLanguage: LANGUAGES) => {
    dispatch(setLanguage(selectedLanguage));
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{language.homeScreen.home}</Text>
      <Text>
        {language.homeScreen.env} {'->'} {API_URL}
      </Text>
      <Button
        title={language.homeScreen.details}
        onPress={() => navigation.navigate(APPROUTES.details)}
      />
      <ImageRenderer
        assetSrc={APP_IMAGES.booking}
        width={dimensions.viewWidth(200)}
        height={dimensions.viewWidth(200)}
      />
      <Button
        title="Set Language as Hindi"
        onPress={() => disptachSetLanguage(LANGUAGES.HINDI)}
      />
      <Button
        title="Set Language as English"
        onPress={() => disptachSetLanguage(LANGUAGES.ENGLISH)}
      />
    </View>
  );
};
