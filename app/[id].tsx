import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Stack, useLocalSearchParams } from 'expo-router';
import events from '~/assets/events.json';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import EventDetails from './screens/eventDetails';
import Games from './screens/games';
import Standings from './screens/standings';
import ExtendedCustomHeader from '~/components/ExtendedCustomHeader';
import { StatusBar } from 'expo-status-bar';

const Tab = createMaterialTopTabNavigator();

export default function EventPage() {
  const { id } = useLocalSearchParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return <Text>Event wasn't found</Text>;
  }

  const layout = useWindowDimensions();

  // Calculate the width of each tab based on the screen width
  // Subtract any padding or margin you might have on the screen
  const tabWidth = layout.width / 3; // Divide by the number of tabs

  return (
    <>
      <Stack.Screen
        options={{
          header: () => (
            <ExtendedCustomHeader event={event} />
          ),
        }}
      />
      <StatusBar style={'auto'} backgroundColor="#f0f0f0" />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 16,
            textTransform: 'none', // This ensures the label text isn't all caps
            fontWeight: 'bold',
          },
          tabBarItemStyle: {
            width: tabWidth,
            padding: 0, // Remove default padding
          },
          tabBarStyle: {
            backgroundColor: '#f0f0f0', // or any color you prefer
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'navy',
            height: 3, // Makes the indicator more visible
          },
          tabBarPressColor: 'transparent', // Removes the ripple effect on Android
        }}>
        <Tab.Screen
          name="Details"
          component={EventDetails}
          options={{ tabBarLabel: 'Details', lazy: true }}
        />
        <Tab.Screen name="Games" component={Games} options={{ tabBarLabel: 'Games', lazy: true }} />
        <Tab.Screen
          name="Standing"
          component={Standings}
          options={{ tabBarLabel: 'Standing', lazy: true }}
        />
      </Tab.Navigator>
    </>
  );
}

// Shatranji1324
