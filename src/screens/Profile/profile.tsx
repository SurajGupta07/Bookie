import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  getProfileMessage,
  getProfileStatus,
} from '../../redux/features/profile/profileSelectors';
import {setMessage} from '../../redux/features/profile/profileSlice';
import {getUserAsync} from '../../redux/features/profile/profileThunk';
import {AppDispatch} from '../../redux/store';
import {APPSTATES} from '../../types/enums';
import {styles} from './style';
import {AImage} from '../../components/image/image';
import dimensions from '../../utils/dimensions';

export const Profile: React.FC = () => {
  const message = useSelector(getProfileMessage);
  const status = useSelector(getProfileStatus);
  const dispatch = useDispatch<AppDispatch>();

  const dispatchSetMessage = () => {
    dispatch(setMessage('Updated Message state'));
  };

  const dispatchGetUser = () => {
    dispatch(getUserAsync());
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Profile: {message}</Text>
      <Button title="Update Message" onPress={dispatchSetMessage} />
      <Button title="Update Message Async" onPress={dispatchGetUser} />
      {status === APPSTATES.LOADING ? (
        <Text>Loading</Text>
      ) : (
        message && (
          <AImage
            image={null}
            imageUrl={message}
            imageHeight={dimensions.viewHeight(200)}
            imageWidth={dimensions.viewWidth(200)}
          />
        )
      )}
    </View>
  );
};
