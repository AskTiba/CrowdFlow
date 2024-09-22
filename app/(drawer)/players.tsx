import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tournaments from './tournaments';
import Profile from './profile';

const Tab = createMaterialTopTabNavigator();

export default function EqualSpacedTabs() {
  const layout = useWindowDimensions();

  // Calculate the width of each tab based on the screen width
  // Subtract any padding or margin you might have on the screen
  const tabWidth = layout.width / 2; // Divide by the number of tabs

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: 'none', // This ensures the label text isn't all caps
          fontWeight: 'bold',
        },
        tabBarItemStyle: {
          width: tabWidth,
          padding: 0, // Remove default padding
        },
        tabBarStyle: {
          backgroundColor: 'white', // or any color you prefer
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'navy',
          height: 3, // Makes the indicator more visible
        },
        tabBarPressColor: 'transparent', // Removes the ripple effect on Android
      }}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Player Profile',
        }}
      />
      <Tab.Screen
        name="Tournaments"
        component={Tournaments}
        options={{
          tabBarLabel: 'Tournaments',
        }}
      />
    </Tab.Navigator>
  );
}
