import React, {useEffect} from 'react';
import 'react-native-gesture-handler';

import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {IMAGES} from '../../../constants/images';
import ElevatedView from 'react-native-elevated-view';
import {LoginForm} from './components/loginForm';
import SplashScreen from 'react-native-splash-screen';

export const LoginScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide(); //hides the splash screen on app load.
    }, 1000);
  }, []);
  return (
    <View style={styles._mainContainer}>
      <ElevatedView elevation={5} style={styles._logoImageElevatedContainer}>
        <Image
          source={IMAGES.APP_LOGO}
          // source={{
          //   uri: `file:///data/user/0/com.icas_reporter/cache/mrousavy2785694321349338233.jpg`,
          // }}
          resizeMode={'contain'}
          style={styles._logoImage}
        />
      </ElevatedView>
      <Text style={styles._icasText}>ICAS</Text>
      <LoginForm />
    </View>
  );
};
