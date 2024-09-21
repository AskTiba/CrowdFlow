import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Image, Pressable } from 'react-native';
import CustomDrawerContent from '~/components/CustomDrawerContent';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

export default function Layout() {
  const navigation = useNavigation();
  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          // drawerHideStatusBarOnOpen: true,
          drawerContentStyle: { backgroundColor: '#ffd700' },
          drawerActiveTintColor: '#ffe5ec',
          // drawerLabelStyle: { marginLeft: -28 },
          headerLeft: () => (
            <Pressable onPress={onToggle} className="flex-row p-5">
              <Image
                className="size-12 self-center rounded-full"
                source={{
                  uri: 'https://pbs.twimg.com/profile_images/1548355275467329537/YKrjuN6p_400x400.jpg',
                }}
              />
            </Pressable>
          ),
        }}
        drawerContent={CustomDrawerContent}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            headerTitle: 'Welcome, back Atuku',
            // headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: 'User',
            headerTitle: 'Profile',
          }}
        />
        <Drawer.Screen
          name="players"
          options={{
            drawerLabel: 'Players',
            title: 'Players',
          }}
        />
        <Drawer.Screen
          name="notifications"
          options={{
            drawerLabel: 'Notifications',
            title: 'Notifications',
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
