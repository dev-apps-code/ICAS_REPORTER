import React from 'react';
import 'react-native-gesture-handler';

import {Text, View} from 'react-native';
import {styles} from './styles';
import {ICON_SIZE} from '../../../constants/sizes';
import {MAIN_COLOR} from '../../../constants/color';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import ElevatedView from 'react-native-elevated-view';
import {ReportDetailsHeader} from './components/reportDetailsHeader';
import {ReportDetailsForm} from './components/reportDetailsForm';

export const ReportDetails = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles._mainContainer}>
      <ReportDetailsHeader />
      <ReportDetailsForm />
    </View>
  );
};
