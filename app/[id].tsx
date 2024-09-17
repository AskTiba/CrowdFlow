import { View, Text, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import events from '~/assets/events.json';

export default function EventPage() {
  const { id } = useLocalSearchParams();
  const event = events.find((e) => e.id === id);
  return (
    <View>
      <Text>Event title : {event?.name}</Text>
      <Image source={{ uri: event?.image }} className="aspect-video w-2/5 rounded-xl" />
    </View>
  );
}
