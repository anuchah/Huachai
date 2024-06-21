import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackName} from '../enum/StackEnum';
import Redirect from '../screens/Redirect';
import BottomNavigation from './bottom';

//hand-middle-finger

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={StackName.BottomTabStack}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={StackName.RedirectStack} component={Redirect} />
        <Stack.Screen name={StackName.BottomTabStack} component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
