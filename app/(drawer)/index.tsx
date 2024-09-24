import { Stack } from 'expo-router';
import { View, Text, Share, Image, TouchableOpacity, FlatList } from 'react-native';
import Meditate from '~/assets/meditate';
import EventListItem from '~/components/EventListItem';

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Events',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTintColor: '#32cd32',
        }}
      />
      <View className="items-center text-xl font-bold">
        <Text className="py-4 text-base">Good morning to you.</Text>
        <View className="items-center">
          <Meditate fill={'#ffd700'} width={350} height={350} />
        </View>
        <Text className="py-4 text-center text-base">
          I don't like your nails. I haven't yet seen them but i know they ugly
        </Text>
        <Text className="py-4 text-left text-base font-bold">
          Have a lovely day,{'\n'}yours truly.{'\n'}Not your best friend.
        </Text>
      </View>
    </>
  );
}
