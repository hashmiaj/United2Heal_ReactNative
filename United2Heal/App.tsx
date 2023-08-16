/** 
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import MainTabNavigator from './MainTabNavigator';
import WelcomePage from './WelcomePage';
import AdminScreen from './AdminScreen';
import VolunteerLogin from './VolunteerLogin';
import AdminTabNavigator from './AdminTabNavigator';
import LogoutContext from './LogoutContext';

const LoginNavigationStack = createNativeStackNavigator();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    // Add navigation reset if required
  };

  const handleLogin = (isUserAdmin: boolean) => {
    setIsLoggedIn(true);
    setIsAdmin(isUserAdmin);
};


  return (
    <PaperProvider>
      <NavigationContainer>
        {!isLoggedIn ? 
          (<LoginNavigationStack.Navigator initialRouteName="Welcome">
            <LoginNavigationStack.Screen name="Welcome" component={WelcomePage} />
            <LoginNavigationStack.Screen name="AdminScreen">
              {() => <AdminScreen onLogin={() => handleLogin(true)} />}
            </LoginNavigationStack.Screen>
            <LoginNavigationStack.Screen name="VolunteerLogin">
              {() => <VolunteerLogin onLogin={() => handleLogin(false)} />}
            </LoginNavigationStack.Screen>
          </LoginNavigationStack.Navigator>) :
          <LogoutContext.Provider value={{ handleLogout }}>
            {isAdmin ? <AdminTabNavigator/> : <MainTabNavigator/>}
          </LogoutContext.Provider>
        }
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
