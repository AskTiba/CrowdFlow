import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LeftArrow from '~/assets/arrow-left';
import Star from '~/assets/star';
import Bell from '~/assets/bell';

type ExtendedCustomHeaderProps = {
  event: {
    event_name: string;
    // Add other event properties here
  };
};

export default function ExtendedCustomHeader({ event }: ExtendedCustomHeaderProps) {
  if (!event) {
    return (
      <SafeAreaView className="bg-[#f0f0f0] p-4">
        <Text>Event wasn't found</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView className="px-4">
      <View className="bg-[#f0f0f0] py-1">
        <View className="flex-row justify-between px-4 py-1">
          <LeftArrow color={'#000000'} />
          <View className="flex-row gap-x-8">
            <TouchableOpacity className="">
              <Bell color={'#000000'} />
            </TouchableOpacity>
            <TouchableOpacity className="">
              <Star color={'#000000'} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-1/2 flex-row items-center gap-x-2 px-4">
          <Image className="size-14" source={require('../assets/splash.png')} />
          <View className="">
            <Text numberOfLines={3} className="font-bold">
              {event.event_name}
            </Text>
            <Text className="text-[16px]">24/25</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
