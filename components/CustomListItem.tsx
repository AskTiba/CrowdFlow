import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface CustomListItemProps {
  leftIcon?: React.FC<SvgProps>;
  leftText: string;
  rightText?: string;
  rightIcon?: React.FC<SvgProps>;
  onPress: () => void;
  leftIconColor?: string;
  rightIconColor?: string;
}

const CustomListItem: React.FC<CustomListItemProps> = ({
  leftIcon: LeftIcon,
  leftText,
  rightText,
  rightIcon: RightIcon,
  onPress,
  leftIconColor = '#3a86ff',
  rightIconColor = '#8d99ae',
}) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex flex-row items-center justify-between p-4">
      <View className="flex-row items-center gap-x-4">
        {LeftIcon && <LeftIcon height={20} width={20} color={leftIconColor} />}
        <Text className="text-base">{leftText}</Text>
      </View>
      <View className="flex-row items-center gap-x-4">
        {rightText && <Text className="text-sm text-gray-600">{rightText}</Text>}
        {RightIcon && <RightIcon height={20} width={20} color={rightIconColor} />}
      </View>
    </TouchableOpacity>
  );
};

export default CustomListItem;
