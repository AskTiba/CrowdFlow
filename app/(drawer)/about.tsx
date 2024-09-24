import { View, Text, TouchableOpacity, Modal, Animated } from 'react-native';
import React, { useState } from 'react';
import Android from '~/assets/android';

export default function about() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalHeight] = useState(new Animated.Value(300)); // Initial height of modal

  const closeModal = () => {
    setModalVisible(false);
    // setDeleted(false);
    modalHeight.setValue(298); // Reset modal height for future uses
  };

  return (
    <View className="mt-5 flex-1 items-center justify-center">
      <Modal
        animationType="slide"
        statusBarTranslucent
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <TouchableOpacity
          className="flex-1 items-center justify-center rounded-[20px] bg-slate-500 shadow-black"
          onPress={() => setModalVisible(!modalVisible)}>
          <Animated.View style={[{ height: modalHeight }]}>
            <Text className="text-[#ffd700]">Silly</Text>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity className="" onPress={() => setModalVisible(true)}>
        <Android className="" height={64} width={64} />
      </TouchableOpacity>
    </View>
  );
}
