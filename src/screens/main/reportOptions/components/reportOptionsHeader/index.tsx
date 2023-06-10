import React from 'react';

import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MAIN_COLOR_TRANSPARENT} from '../../../../../constants/color';
import {styles} from './styles';
import ElevatedView from 'react-native-elevated-view';
import {ICON_SIZE} from '../../../../../constants/sizes';
import Feather from 'react-native-vector-icons/Feather';
import {IMAGES} from '../../../../../constants/images';

export const ReportOptionsHeader = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles._headerContainer}>
      {/* <ElevatedView elevation={3} style={styles._headerBackContainer}>
        <Image
          source={IMAGES.APP_LOGO}
          resizeMode={'contain'}
          style={styles._logoImage}
        />
      </ElevatedView> */}

      <Text style={styles._headerText}>ICAS Report Incident</Text>
    </View>
  );
};
