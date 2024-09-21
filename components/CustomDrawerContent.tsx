import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Pawn from '~/assets/pawn';
import CustomListItem from './CustomListItem';
import Information from '~/assets/info';
import Settings from '~/assets/settings';
import At from '~/assets/at';
import Tournaments from '~/assets/tournaments';
import Puzzles from '~/assets/puzzles';

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View className="flex-1">
      <DrawerContentScrollView {...props}>
        <View className="flex-1 gap-y-1 p-4">
          <Text className="text-lg font-bold">Atuku Praise</Text>
          <Text className="text-gray-500">1500</Text>
        </View>
        {/* <DrawerItemList {...props} />
        <DrawerItem label={'Logout'} onPress={() => router.push('/')} /> */}
        <View className="">
          <CustomListItem
            leftIcon={Pawn}
            leftText="Home"
            onPress={() => {
              router.push('/');
            }}
          />
          <CustomListItem
            leftIcon={Tournaments}
            leftText="Tournaments"
            onPress={() => {
              router.push('./(drawer)/tournaments');
            }}
          />
          <CustomListItem leftIcon={At} leftText="Players" onPress={() => {}} />
          <CustomListItem leftIcon={Puzzles} leftText="Puzzles" onPress={() => {}} />
          <CustomListItem leftIcon={Settings} leftText="Settings" onPress={() => {}} />
          <CustomListItem leftIcon={Information} leftText="About" onPress={() => {}} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
