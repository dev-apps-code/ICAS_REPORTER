import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONT_STYLES} from '../../../constants/fonts';
import {DEFAULT_RADIUS, SCREEN_DEFAULT_PADDING} from '../../../constants/sizes';
import {MAIN_COLOR} from '../../../constants/color';

export const styles = StyleSheet.create({
  _mainContainer: {
    height: hp(100),
    backgroundColor: '#FFF',
    paddingHorizontal: SCREEN_DEFAULT_PADDING.HORIZONTAL,
  },
});
