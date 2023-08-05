// MainTabNavigator.js
import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './HomeTab';
import SearchTab from './SearchTab';
import SettingsTab from './SettingsTab';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your desired icon library

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
                iconName = 'home'; 
                color = focused ? "#0096FF" : "#000000";
            } else if (route.name === 'Search') {
                iconName = 'search';
                color = focused ? "#0096FF" : "#000000";
            } else if (route.name === 'Settings') {
                iconName = 'cog';
                color = focused ? "#0096FF" : "#000000";
            }
            return <Icon name={iconName} size={size} color={color} />;
            },
        })}
        options={{ headerShown: false }}
      >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Search" component={SearchTab} />
      <Tab.Screen name="Settings" component={SettingsTab} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
