import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONT_STYLES} from '../../../../../constants/fonts';
import {
  MAIN_COLOR,
  MAIN_COLOR_TRANSPARENT,
} from '../../../../../constants/color';

export const styles = StyleSheet.create({
  _mainContainer: {
    height: hp(100),
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: hp(5),
  },
  _optionItemImage: {
    height: wp(25),
    width: wp(25),
  },
  _optionItemContainer: {
    backgroundColor: '#FFF',
    // height: hp(30),
    // width: wp(60),
    height: wp(40),
    width: wp(90),
    marginHorizontal: wp(5),
    borderRadius: 10,
    marginBottom: hp(3),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  _reportIncidentText: {
    ...{
      color: '#000',
    },
    ...FONT_STYLES.INTER_16_700_BOLD,
  },
  _reportOptionListContainer: {
    width: wp(100),
    alignItems: 'center',
    paddingTop: hp(2),
  },
});
