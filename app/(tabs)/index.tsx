import { Stack } from 'expo-router';
import { View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events', headerTitleAlign: 'center' }} />
      <View className="flex-1 "></View>
    </>
  );
}
