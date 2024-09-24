import { View, Text } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import AdaptiveButton from '~/components/AdaptiveButton';

export default function settings() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);

  // variables
  const snapPoints = useMemo(() => ['50%, 75%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenPress = () => bottomSheetRef.current?.expand()

  // renders
  return (
    <View className="flex-1 bg-[#32cd32]">
      <AdaptiveButton className="m-4" onPress={renderBottomSheet} title="Bushera is here" />
      {isOpen && (
        <View className="flex-1 ">
          <BottomSheet
            enablePanDownToClose={true}
            backgroundStyle={{ backgroundColor: '#ffd700' }}
            handleIndicatorStyle={{

            }}
            // bottomInset={20}
            // detached={true}
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <BottomSheetView className="flex-1 items-center">
              <Text>Awesome 🎉.............................</Text>
            </BottomSheetView>
          </BottomSheet>
        </View>
      )}
    </View>
  );
}
