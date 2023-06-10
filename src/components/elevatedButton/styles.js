import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONT_STYLES} from '../../constants/fonts';
import {DEFAULT_RADIUS, SCREEN_DEFAULT_PADDING} from '../../constants/sizes';
import {MAIN_COLOR} from '../../constants/color';

export const styles = StyleSheet.create({
  _elevatedContainer: {
    borderRadius: DEFAULT_RADIUS,
    alignSelf: 'center',
    marginBottom: hp(3),
    overflow: 'hidden',
  },
  _button: {
    width: wp(78),
    height: hp(5.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_COLOR,
    borderRadius: DEFAULT_RADIUS,
  },
  _buttonText: {
    ...{
      color: '#000',
    },
    ...FONT_STYLES.INTER_16_600_SEMIBOLD,
  },
});
