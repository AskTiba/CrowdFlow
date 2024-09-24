import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import ChevronDown from '~/assets/chevron-down';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotateAnimation] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    Animated.timing(rotateAnimation, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const rotateInterpolate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const animatedStyles = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <View className="p-5">
      <TouchableOpacity
        onPress={toggleMenu}
        className="items-center">
        <Animated.View style={animatedStyles}>
          <ChevronDown color={'#000000'} />
        </Animated.View>
      </TouchableOpacity>
      {/* {isOpen && (
        <View className="mt-2 gap-y-1 rounded-md bg-gray-100 p-3">
          <Text className="">Menu Item 1</Text>
          <Text className="">Menu Item 2</Text>
          <Text className="">Menu Item 3</Text>
        </View>
      )} */}
    </View>
  );
};

export default DropDown;
