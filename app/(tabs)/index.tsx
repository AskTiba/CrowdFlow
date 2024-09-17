import { Stack } from 'expo-router';
import { View, Text, Share, Image, TouchableOpacity } from 'react-native';
import EventListItem from '~/components/EventListItem';
import events from '~/assets/events.json';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events', headerTitleAlign: 'center' }} />
      <EventListItem event={events[0]} />
      <EventListItem event={events[1]} />
      <EventListItem event={events[2]} />
      <EventListItem event={events[3]} />
      <EventListItem event={events[4]} />
      <EventListItem event={events[5]} />
      <EventListItem event={events[6]} />
      <EventListItem event={events[7]} />
      <EventListItem event={events[8]} />
      <EventListItem event={events[9]} />
    </>
  );
}
