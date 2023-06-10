import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/authentication/login';
import AuthStackScreen from './authstack';
import MainTabScreen from './mainTab';
import {NavigationContainer} from '@react-navigation/native';
import ReportStackScreen from './reportStack';

const MainStack = createNativeStackNavigator();

const MainStackScreen = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
        <MainStack.Screen
          name="ReportStackScreen"
          component={ReportStackScreen}
        />
        {/* <MainStack.Screen name="MainTabScreen" component={MainTabScreen} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackScreen;
