import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectMessage,
  selectStatus,
} from '../../redux/features/profile/profileSelectors';
import {setMessage} from '../../redux/features/profile/profileSlice';
import {getUserAsync} from '../../redux/features/profile/profileThunk';
import {AppDispatch} from '../../redux/store';
import {styles} from './style';

export const Profile = () => {
  const message = useSelector(selectMessage);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Profile: {message}</Text>
      <Button
        title="Update Message"
        onPress={() => dispatch(setMessage('Message set done.'))}
      />
      <Button
        title="Update Message Async"
        onPress={() => dispatch(getUserAsync())}
      />
      {status === 'loading' ? (
        <Text>Loading</Text>
      ) : (
        <Image
          source={{
            uri: message,
            width: 200,
            height: 200,
          }}
        />
      )}
    </View>
  );
};
