/**
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './WelcomePage';
import AdminScreen from './AdminScreen'; // Import your AdminScreen component
import VolunteerScreen from './VolunteerScreen'; // Import your VolunteerScreen component

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen name="VolunteerScreen" component={VolunteerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

