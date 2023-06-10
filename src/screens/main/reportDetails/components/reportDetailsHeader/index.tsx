import React from 'react';

import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  MAIN_COLOR,
  MAIN_COLOR_TRANSPARENT,
} from '../../../../../constants/color';
import {styles} from './styles';
import ElevatedView from 'react-native-elevated-view';
import {ICON_SIZE} from '../../../../../constants/sizes';
import Feather from 'react-native-vector-icons/Feather';

export const ReportDetailsHeader = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles._headerContainer}>
      <ElevatedView elevation={3} style={styles._headerBackContainer}>
        <Feather
          name="arrow-left-circle"
          size={ICON_SIZE * 1.5}
          color={MAIN_COLOR}
          onPress={onPressBack}
        />
      </ElevatedView>

      <Text style={styles._headerText}>ICAS Report Details</Text>
    </View>
  );
};
