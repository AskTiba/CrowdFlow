import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Android from '~/assets/android';

const AndroidSpinner = ({ size = 64, duration = 1000 }) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = () => {
      spinValue.setValue(0);
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => spin());
    };
    spin();
  }, []);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{ width: 64, height: 64 }}>
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          transform: [{ rotate }],
        }}>
        <Svg width="100%" height="100%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="#0496ff"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="70 180"
          />
        </Svg>
      </Animated.View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Android width={32} height={32} color="#29bf12" fill="#22c55e" />
      </View>
    </View>
  );
};

export default AndroidSpinner;
