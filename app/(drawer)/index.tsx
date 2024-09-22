import { Stack } from 'expo-router';
import { View, Text, Share, Image, TouchableOpacity, FlatList } from 'react-native';
import EventListItem from '~/components/EventListItem';

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Events',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ffd700',
          },
          headerTintColor:'#32cd32'
        }}
      />
    </>
  );
}
