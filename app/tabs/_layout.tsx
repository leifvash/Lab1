import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen name="index"
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen name="bookmarks" 
        options={
          {tabBarIcon: () => <Ionicons name='bookmarks' size={24} color="black"/>
        }}
      />
      <Tabs.Screen name="create"
        options={
          {tabBarIcon: () => <Ionicons name='add-circle' size={24} color="black" />}
        }
      />
      <Tabs.Screen name="notifications"
        options={
          {tabBarIcon: () => <Ionicons name='notifications' size={24} color="black" />}
        }
      />
      <Tabs.Screen name="profile"
        options={
          {tabBarIcon: () => <Ionicons name='person' size={24} color="black" />}
        }
      />
    </Tabs>
  );
}