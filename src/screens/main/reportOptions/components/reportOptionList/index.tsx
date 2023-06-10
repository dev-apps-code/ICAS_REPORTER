import React from 'react';
import {FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {IMAGES} from '../../../../../constants/images';
import {Avatar, Button, Card} from 'react-native-paper';
import {styles} from './styles';
import ElevatedView from 'react-native-elevated-view';
import Feather from 'react-native-vector-icons/Feather';
import {ICON_SIZE} from '../../../../../constants/sizes';
import {MAIN_COLOR} from '../../../../../constants/color';
import {useNavigation} from '@react-navigation/native';
import {REPORT_OPTIONS} from '../../../../../constants/values';

const ReportOptionListItem = ({data}) => {
  const navigation = useNavigation();

  const onPressOptions = () => {
    navigation.push('ReportDetails');
  };

  return (
    <TouchableOpacity onPress={onPressOptions} activeOpacity={1}>
      <ElevatedView elevation={3} style={styles._optionItemContainer}>
        <Image
          source={data.image}
          resizeMode={'contain'}
          style={styles._optionItemImage}
        />

        <Text style={styles._reportIncidentText}>{data.name}</Text>
        <Feather
          name="arrow-right-circle"
          size={ICON_SIZE * 1.5}
          // style={styles._variationModalQuantityIcon}
          color={MAIN_COLOR}
        />
      </ElevatedView>
    </TouchableOpacity>
  );
};

export const ReportOptionList = () => {
  return (
    <FlatList
      data={REPORT_OPTIONS}
      renderItem={object => <ReportOptionListItem data={object.item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles._reportOptionListContainer}
      // numColumns={2}
    />
  );
};
