import { View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import CircularProgress from '~/components/CircularProgress';
import AdaptiveButton from '~/components/AdaptiveButton';

export default function notifications() {
  const [progress, setProgress] = useState(50);
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <CircularProgress
        size={150}
        strokeWidth={12}
        progress={progress}
        progressColor="#8e44ad" // Custom progress color (purple)
        backgroundColor="#dcdcdc" // Custom background color (light gray)
      />
      <AdaptiveButton title="Increase Progress" onPress={() => setProgress(progress + 10)} />
      <AdaptiveButton title="Decrease Progress" onPress={() => setProgress(progress - 10)} />
    </SafeAreaView>
  );
}
