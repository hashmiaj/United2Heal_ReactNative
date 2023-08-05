/**
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import MainTabNavigator from './MainTabNavigator';
import WelcomePage from './WelcomePage';
import AdminScreen from './AdminScreen'; // Import your AdminScreen component
import VolunteerLogin from './VolunteerLogin'; // Import your VolunteerScreen component

const LoginNavigationStack = createNativeStackNavigator();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <PaperProvider>
      <NavigationContainer>
      {!isLoggedIn ? 
        (<LoginNavigationStack.Navigator initialRouteName="Welcome">
          <LoginNavigationStack.Screen name="Welcome" component={WelcomePage} />
          <LoginNavigationStack.Screen name="AdminScreen" component={AdminScreen} />
          <LoginNavigationStack.Screen name="VolunteerLogin">
            {() => <VolunteerLogin onLogin={handleLogin} />}
          </LoginNavigationStack.Screen>
        </LoginNavigationStack.Navigator>) :
        <MainTabNavigator/>
      }
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

