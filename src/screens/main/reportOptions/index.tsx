import React from 'react';
import 'react-native-gesture-handler';

import {FlatList, Image, Text, View} from 'react-native';
import {styles} from './styles';
import {IMAGES} from '../../../constants/images';
import {REPORT_OPTIONS} from '../../../constants/values';
import {ReportOptionList} from './components/reportOptionList';
import {ReportOptionsHeader} from './components/reportOptionsHeader';

export const ReportOptions = () => {
  return (
    <View style={styles._mainContainer}>
      <ReportOptionsHeader />
      <ReportOptionList />
    </View>
  );
};
