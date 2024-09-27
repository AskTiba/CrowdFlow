import { View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import CircularProgress from '~/components/CircularProgress';
import AdaptiveButton from '~/components/AdaptiveButton';

export default function about() {
  const [progress, setProgress] = useState(0);

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <CircularProgress
        size={200}
        strokeWidth={12}
        progress={13}
        progressColor="#0496ff" // Custom progress color (purple)
        backgroundColor="#dcdcdc" // Custom background color (light gray)
      />
      <View className="gap-4 py-4">
        <AdaptiveButton title="Increase Progress" onPress={() => setProgress(progress + 10)} />
        <AdaptiveButton title="Decrease Progress" onPress={() => setProgress(progress - 10)} />
      </View>
    </SafeAreaView>
  );
}
