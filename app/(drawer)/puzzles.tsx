import React from 'react';
import { View } from 'react-native';
import AndroidSpinner from '~/components/AndroidSpinner';

export default function Puzzles() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AndroidSpinner size={80} duration={800} />
    </View>
  );
}
