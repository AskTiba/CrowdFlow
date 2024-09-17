import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ShareIcon from '~/assets/share';
import SaveIcon from '~/assets/save';

export default function EventListItem({ event }: any) {
  return (
    <View className="OneEventListItem p-3">
      <View className="">
        <View className="flex-row justify-between">
          <View className="flex-1">
            <Text className="text-gray-800">Fri 18, Nov · 10.00 GMT</Text>
            <Text className="text-lg font-bold" numberOfLines={2}>
              {event.name}
            </Text>
            <Text className="text-gray-500">Location : {event.location}</Text>
            <Text className="text-gray-500">Prize Fund : {event.prizeFund}</Text>
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
      </View>
    </View>
  );
}
