import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/authentication/login';
import {ReportOptions} from '../screens/main/reportOptions';
import {ReportDetails} from '../screens/main/reportDetails';
import {AppCamera} from '../screens/main/appCamera';

const ReportStack = createNativeStackNavigator();

const ReportStackScreen = () => {
  return (
    <ReportStack.Navigator screenOptions={{headerShown: false}}>
      <ReportStack.Screen name="ReportOptions" component={ReportOptions} />
      <ReportStack.Screen name="ReportDetails" component={ReportDetails} />
      <ReportStack.Screen name="AppCamera" component={AppCamera} />
    </ReportStack.Navigator>
  );
};

export default ReportStackScreen;
