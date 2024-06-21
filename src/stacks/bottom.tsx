import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenName} from '../enum/ScreenEnum';
import Helicopter from '../screens/Helicopters/Helicopter';
import HandMiddleFinger from '../screens/HandMiddleFingers/HandMiddleFinger';
import Mask from '../screens/Masks/Mask';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../configs/colors';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={ScreenName.Helicopter}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.NA284b63,
        tabBarInactiveTintColor: colors.GRd9d9d9,
      }}>
      <Tab.Screen
        name={ScreenName.Helicopter}
        component={Helicopter}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="helicopter" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.HandMiddleFinger}
        component={HandMiddleFinger}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="hand-middle-finger" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.Mask}
        component={Mask}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="theater-masks" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
