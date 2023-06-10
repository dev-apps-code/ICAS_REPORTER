import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONT_STYLES} from '../../../../../constants/fonts';
import {
  DEFAULT_RADIUS,
  SCREEN_DEFAULT_PADDING,
} from '../../../../../constants/sizes';
import {MAIN_COLOR} from '../../../../../constants/color';
export const styles = StyleSheet.create({
  _formMainContainer: {
    marginBottom: hp(5),
    alignItems: 'center',
  },
  _formFieldContainer: {
    width: wp(100),
    marginTop: hp(1),
    paddingHorizontal: SCREEN_DEFAULT_PADDING.HORIZONTAL,
    alignItems: 'center',
  },
  _formTextInput: {
    width: wp(90),
    minHeight: hp(5.2),
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
      top: hp(-0.5),
      left: wp(7),
      backgroundColor: '#FFF',
      paddingHorizontal: wp(2),
      color: '#000',
    },
    ...FONT_STYLES.INTER_16_700_BOLD,
  },
  _formMediaRowElevatedContainer: {
    flexDirection: 'row',
    width: wp(90),
    paddingVertical: hp(1),
    borderRadius: DEFAULT_RADIUS,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SCREEN_DEFAULT_PADDING.HORIZONTAL,
    marginBottom: hp(2),
  },
  _formMediaTypeText: {
    ...{
      color: '#000',
    },
    ...FONT_STYLES.INTER_16_700_BOLD,
  },
  _formAddMediaIconContainer: {
    borderRadius: DEFAULT_RADIUS,
    padding: hp(0.5),
  },
  _formSubmitButton: {
    width: wp(90),
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
  _formFooterContainer: {
    marginTop: hp(20),
    alignSelf: 'flex-end',
  },
});
