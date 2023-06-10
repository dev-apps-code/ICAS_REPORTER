import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONT_STYLES} from '../../../constants/fonts';

export const styles = StyleSheet.create({
  _mainContainer: {
    height: hp(100),
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: hp(10),
  },
  _logoImage: {
    height: hp(20),
    width: wp(50),
  },
  _logoImageElevatedContainer: {
    borderRadius: 1000,
    height: hp(25),
    width: hp(25),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(2),
  },
  _icasText: {
    ...{
      color: '#000',
      marginBottom: hp(5),
    },
    ...FONT_STYLES.INTER_23_700_BOLD,
  },
});
