import { Stack } from 'expo-router';
import { View, Text, Share, Image, TouchableOpacity, FlatList } from 'react-native';
import EventListItem from '~/components/EventListItem';
import events from '~/assets/events.json';

export default function Home() {
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
