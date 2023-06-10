import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';

export const ICON_SIZE = hp(2.5);
export const SCREEN_DEFAULT_PADDING = {
  HORIZONTAL: wp(5),
  VERTICAL: Platform.OS === 'ios' ? hp(6) : hp(3),
};
export const DEFAULT_RADIUS = wp(3);
