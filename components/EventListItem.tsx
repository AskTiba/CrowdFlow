import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import ShareIcon from '~/assets/share';
import SaveIcon from '~/assets/save';
import dayjs from 'dayjs';
import { Link } from 'expo-router';

interface Event {
  id: string;
  name: string;
  location: string;
  datetime: string;
  description: string;
  frequency: string;
  format: string;
  prizeFund: string;
  image: string;
  registrationFee: string;
  startingTime: string;
  roundsPerDay: number;
  totalRounds: number;
}

interface EventListItemProps {
  event: Event;
}

export default function EventListItem({ event }: EventListItemProps) {
  return (
    <Link href={`/${event.id}`} asChild className="">
      <Pressable className="OneEventListItem border-b border-gray-200 p-3">
        <View className="flex-row justify-between">
          <View className="flex-1">
            <Text className="text-blue-800">
              {dayjs(event.datetime).format('ddd,  MMM')} · {dayjs(event.datetime).format('h:mm A')}
            </Text>
            <Text className="text-lg font-bold" numberOfLines={2}>
              {event.name}
            </Text>
            <Text className="text-gray-500">Venue : {event.location}</Text>
            <Text className="text-gray-500">Registration Fee : {event.registrationFee}</Text>
          </View>
          <Image source={{ uri: event.image }} className="aspect-video w-2/5 rounded-xl" />
        </View>
        <View className="mt-3 flex-row justify-between">
          <Text className="text-gray-700">24 going</Text>
          <View className="flex-row gap-x-4">
            <TouchableOpacity>
              <ShareIcon height={20} width={20} color={'gray'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <SaveIcon height={20} width={20} color={'gray'} />
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
