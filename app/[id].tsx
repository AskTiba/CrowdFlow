import { View, Text, Image } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import events from '~/assets/events.json';
import dayjs from 'dayjs';

export default function EventPage() {
  const { id } = useLocalSearchParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return <Text>Event wasn't found</Text>;
  }

  return (
    <View className="flex-1 bg-white p-3">
      <Stack.Screen options={{ headerTitle: 'Event', headerTitleAlign: 'center' }} />
      <Image source={{ uri: event.image }} className="aspect-video w-full rounded-xl" />
      <Text className="text-lg font-bold" numberOfLines={2}>
        {event.name}
      </Text>
      <Text className="text-blue-800">
        {dayjs(event.datetime).format('ddd,  MMM')} · {dayjs(event.datetime).format('h:mm A')}
      </Text>
      <Text className="my-2 text-lg leading-tight">{event.description}</Text>
    </View>
  );
}
