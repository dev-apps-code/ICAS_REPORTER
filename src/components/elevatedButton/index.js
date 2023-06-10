import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import ElevatedView from 'react-native-elevated-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ActivityIndicator} from 'react-native-paper';
import {MAIN_COLOR_TRANSPARENT} from '../../constants/color';

export const ElevatedButton = ({
  text,
  onPress,
  marginTop = 0,
  isLoading = false,
}) => {
  return (
    <ElevatedView
      elevation={2}
      style={{
        ...{
          marginTop: hp(marginTop),
        },
        ...styles._elevatedContainer,
      }}>
      <TouchableOpacity
        onPress={onPress}
        disabled={isLoading}
        style={styles._button}>
        {isLoading ? (
          <ActivityIndicator size={'small'} color={MAIN_COLOR_TRANSPARENT} />
        ) : (
          <Text style={styles._buttonText}>{text}</Text>
        )}
      </TouchableOpacity>
    </ElevatedView>
  );
};
