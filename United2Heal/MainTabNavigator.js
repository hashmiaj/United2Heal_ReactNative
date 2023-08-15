// MainTabNavigator.js
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, TextInput, View, Text, Alert, ActivityIndicator, TouchableOpacity } from "react-native";
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './HomeTab';
import SearchTab from './SearchTab';
import SettingsTab from './SettingsTab';
import AddItemTab from './AddItemTab';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your desired icon library
import Item from './Item';
import U2HConfigNode from './U2HConfigNode';

const Tab = createBottomTabNavigator();

const MainTabNavigator = ({onLogout}) => {
  const [isLoading, setIsLoading] = useState(false); 
  const [searchItems, setSearchItems] = useState([]);

  const getSearchItems = async () => {
    setIsLoading(true); // Set loading to true when we start the API call
    try {
      const response = await fetch(
        'https://pjg9px1sqf.execute-api.us-east-1.amazonaws.com/getSearchItems'
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Map through the response data and create Item objects
      const itemsData = data.map((item) => new Item(item.ItemID, item.ItemName));

      // Update the searchItems state with the new data
      setSearchItems(itemsData);
      // Set the items and store it in the U2HConfigNode
      U2HConfigNode.setSearchItemsList(itemsData);
    } catch (error) {
      console.log(error.message);
      Alert.alert('Error', error.message); // Show the actual error message
    } finally {
      setIsLoading(false); // Set loading to false when the API call is finished
    }
  };

  useEffect(() => {
    if (searchItems.length == 0) {
      getSearchItems();
    }
  }, []);

  return (
    isLoading ? (  // If loading, display the loading screen
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) :
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
            } else if (route.name === 'Add Item') {
              iconName = 'plus';  // This is the line you'll add for the "plus" icon
              color = focused ? "#0096FF" : "#000000";
            }
          return <Icon name={iconName} size={size} color={color} />;
          },
      })}
  
        options={{ headerShown: false }}
      >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Search" component={SearchTab} />
      <Tab.Screen name="Add Item" component={AddItemTab} />
      <Tab.Screen name="Settings">
        {() => <SettingsTab onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', // Center vertically
      alignItems: 'center', // Center horizontally
    },
    loading: {
      marginTop: 20, 
    },
  });

export default MainTabNavigator;
