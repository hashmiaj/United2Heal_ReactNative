import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation} from '@react-navigation/native';

const SettingsTab = ({onLogout}) => {
  const handleLogout = () => {
    onLogout();
  }
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text> Settings tab</Text>

<Button style={styles.logout_button} mode="contained" onPress={() => handleLogout()}>
  <Text style={styles.logout_button_text}>Log out</Text>
</Button>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logout_button: {
    backgroundColor: '#4285F4',
    textAlign: 'center',
    textcolor: 'white',
  },

  logout_button_text: {
    color: 'white',
  }



   
});

export default SettingsTab;