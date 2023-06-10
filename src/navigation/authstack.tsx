import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/authentication/login';

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
