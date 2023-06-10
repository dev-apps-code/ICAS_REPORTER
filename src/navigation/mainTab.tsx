import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoginScreen} from '../screens/authentication/login';
import ReportStackScreen from './reportStack';

const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="ReportStackScreen" component={ReportStackScreen} />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
