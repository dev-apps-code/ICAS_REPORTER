/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Geolocation from '@react-native-community/geolocation';
import VIForegroundService from '@voximplant/react-native-foreground-service';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const [position, setPosition] = useState<string | null>(null);
  const [subscriptionId, setSubscriptionId] = useState<number | null>(null);

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setPosition(JSON.stringify(pos));
        console.log('getCurrentPosition:', pos);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };
  const watchPosition = () => {
    console.log('watch position');
    try {
      startForegroundService();
      const watchID = Geolocation.watchPosition(
        pos => {
          setPosition(JSON.stringify(pos));
          console.log('watchPosition:', pos);
        },
        error => console.log('WatchPosition Error', JSON.stringify(error)),
        {
          interval: 2000,
          fastestInterval: 2000,
          distanceFilter: 0,
          enableHighAccuracy: true,
        },
      );
      setSubscriptionId(watchID);
    } catch (error) {
      console.log('WatchPosition Error', JSON.stringify(error));
    }
  };

  const clearWatch = () => {
    if (Platform.OS === 'android') {
      VIForegroundService.getInstance()
        .stopService()
        .catch((err: any) => err);
    }

    subscriptionId !== null && Geolocation.clearWatch(subscriptionId);
    setSubscriptionId(null);
    setPosition(null);
  };

  const startForegroundService = async () => {
    if (Platform.Version >= 26) {
      await VIForegroundService.getInstance().createNotificationChannel({
        id: 'locationChannel',
        name: 'Location Tracking Channel',
        description: 'Tracks location of user',
        enableVibration: false,
      });
    }

    return VIForegroundService.getInstance().startService({
      channelId: 'locationChannel',
      id: 420,
      title: 'Watching',
      text: 'Tracking location updates',
      icon: 'ic_launcher',
    });
  };

  useEffect(() => {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: 'always',
      locationProvider: 'auto',
    });

    Geolocation.requestAuthorization(
      success => {
        console.log('requestAuthorization:', success);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
    );
    // getCurrentPosition();
    watchPosition();

    return () => {
      clearWatch();
    };
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>position:{position}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
