import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONT_STYLES} from '../../../../../constants/fonts';
import {
  DEFAULT_RADIUS,
  ICON_SIZE,
  SCREEN_DEFAULT_PADDING,
} from '../../../../../constants/sizes';
import {MAIN_COLOR} from '../../../../../constants/color';
export const styles = StyleSheet.create({
  _headerContainer: {
    height: hp(10),
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SCREEN_DEFAULT_PADDING.HORIZONTAL,
  },
  _headerBackContainer: {
    borderRadius: DEFAULT_RADIUS,
    padding: hp(0.5),
  },
  _headerText: {
    ...{
      color: '#000',
      textAlign: 'left',
    },
    ...FONT_STYLES.INTER_23_700_BOLD,
  },
  _logoImage: {
    height: ICON_SIZE * 2,
    width: ICON_SIZE * 2,
  },
});
