import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import events from '~/assets/events.json';
import EventListItem from '~/components/EventListItem';

export default function Tournaments() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events', headerTitleAlign: 'center' }} />
      <FlatList
        className="bg-white"
        data={events}
        renderItem={({ item }) => <EventListItem event={item} />}
      />
    </>
  );
}
