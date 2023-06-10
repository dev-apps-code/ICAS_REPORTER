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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  cameraButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
