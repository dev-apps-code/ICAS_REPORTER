import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONT_STYLES} from '../../../../../constants/fonts';
import {SCREEN_DEFAULT_PADDING} from '../../../../../constants/sizes';
import {MAIN_COLOR} from '../../../../../constants/color';
export const styles = StyleSheet.create({
  _formMainContainer: {
    marginBottom: hp(5),
  },
  _formFieldContainer: {
    width: wp(100),
    marginTop: hp(1),
    paddingHorizontal: SCREEN_DEFAULT_PADDING.HORIZONTAL,
    alignItems: 'center',
  },
  _formTextInput: {
    width: wp(78),
    height: hp(5.2),
    backgroundColor: '#FFF',
    fontSize: hp(1.7),
    lineHeight: hp(2),
  },

  _formErrorText: {
    ...{
      color: 'red',
      width: wp(78),
    },
    ...FONT_STYLES.INTER_10_400_REGULAR,
  },
  _formInputLabel: {
    ...{
      position: 'absolute',
      top: hp(-0.1),
      left: wp(12),
      backgroundColor: '#FFF',
      paddingHorizontal: wp(2),
      color: '#000',
    },
    ...FONT_STYLES.INTER_12_500_MEDIUM,
  },
  _formSubmitButton: {
    width: wp(78),
    height: hp(5.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_COLOR,
  },
  _formSubmitText: {
    ...{
      color: '#000',
      width: wp(30),
    },
    ...FONT_STYLES.INTER_16_600_SEMIBOLD,
  },
});
