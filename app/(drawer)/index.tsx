import { Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

// Import the events data
import eventsData from '../../assets/events.json';

type TabButtonProps = {
  title: string;
  isActive: boolean;
  onPress: () => void;
};

const TabButton: React.FC<TabButtonProps> = ({ title, isActive, onPress }) => (
  <TouchableOpacity className="flex-1" onPress={onPress}>
    <Text
      className={`
        ${isActive ? 'border border-[#2176ff] bg-[#72efdd]' : 'bg-[#ade8f4]'}
        rounded-lg py-1 text-center font-extrabold text-[#2176ff]
      `}>
      {title}
    </Text>
  </TouchableOpacity>
);

type Event = {
  id: string;
  event_name: string;
  start_date: string;
  end_date: string;
  location: string;
  image: string;
  description: string;
};

type EventCarouselProps = {
  events: Event[];
};

const EventCarousel: React.FC<EventCarouselProps> = ({ events }) => (
  <FlatList
    data={events}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View className="m-2 w-64 rounded-lg bg-[#ade8f4] p-4 shadow-md">
        <Image
          source={{ uri: item.image }}
          className="h-32 w-full rounded-t-lg"
          resizeMode="cover"
        />
        <Text className="mt-2 text-lg font-bold">{item.event_name}</Text>
        <Text className="mt-1 text-sm text-gray-600">{item.location}</Text>
        <Text className="mt-1 text-xs text-gray-500">
          {new Date(item.start_date).toLocaleDateString()} -{' '}
          {new Date(item.end_date).toLocaleDateString()}
        </Text>
      </View>
    )}
  />
);

type TabNames = 'Past' | 'Active' | 'Upcoming';

const categorizeEvents = (events: Event[]): Record<TabNames, Event[]> => {
  const now = new Date();
  return events.reduce(
    (acc, event) => {
      const startDate = new Date(event.start_date);
      const endDate = new Date(event.end_date);
      if (endDate < now) {
        acc.Past.push(event);
      } else if (startDate > now) {
        acc.Upcoming.push(event);
      } else {
        acc.Active.push(event);
      }
      return acc;
    },
    { Past: [], Active: [], Upcoming: [] } as Record<TabNames, Event[]>
  );
};

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabNames>('Active');
  const [categorizedEvents, setCategorizedEvents] = useState<Record<TabNames, Event[]>>({
    Past: [],
    Active: [],
    Upcoming: [],
  });

  const tabs: TabNames[] = ['Past', 'Active', 'Upcoming'];

  useEffect(() => {
    const categorized = categorizeEvents(eventsData);
    setCategorizedEvents(categorized);
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Events',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#caf0f8',
          },
          headerTintColor: '#32cd32',
        }}
      />
      <View className="flex-1 bg-[#caf0f8]">
        <View className="mx-2 items-center gap-4 rounded-lg bg-[#90e0ef] pb-1">
          <Text className="rounded-b-2xl bg-[#0096c7] px-5 py-1 font-black tracking-wide text-[#06d6a0]">
            Fide Rating
          </Text>
          <View className="flex-row">
            <View className="flex-1 items-center justify-center">
              <Text className="font-extrabold text-[#2176ff]">1935</Text>
              <Text className="font-extrabold">Blitz</Text>
            </View>
            <View className="items-center justify-around rounded-lg bg-[#ade8f4] px-5 py-8">
              <Text className="text-5xl font-extrabold text-[#2176ff]">1448</Text>
              <Text className="font-extrabold">Classical</Text>
            </View>
            <View className="flex-1 items-center justify-center">
              <Text className="font-extrabold text-[#2176ff]">1712</Text>
              <Text className="font-extrabold">Rapid</Text>
            </View>
          </View>
        </View>
        <View className="mx-2 mt-1 flex-row justify-around gap-x-1 rounded-lg bg-[#90e0ef] p-1">
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              title={tab}
              isActive={activeTab === tab}
              onPress={() => setActiveTab(tab)}
            />
          ))}
        </View>
        <View className="">
          <EventCarousel events={categorizedEvents[activeTab]} />
        </View>
      </View>
    </>
  );
};

export default Home;
