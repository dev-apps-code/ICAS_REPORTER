import React from 'react';
import 'react-native-gesture-handler';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import Navigation from './src/navigation';
// import store from './src/redux/store';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
LogBox.ignoreLogs(['Warning: ...']);
// View.defaultProps = View.defaultProps || {};
// View.defaultProps.pointerEvents = 'none';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <Provider store={store}> */}
      <Navigation />
      {/* </Provider> */}
    </SafeAreaProvider>
  );
}
