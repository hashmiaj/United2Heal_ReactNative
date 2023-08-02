// AdminScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AdminScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);

  const correctUsername = 'admin';
  const correctPassword = 'password123';

  const handleLogin = () => {
    if (username !== correctUsername || password !== correctPassword) {
      setAttemptCount(attemptCount + 1);
      if (attemptCount >= 2) {
        Alert.alert('Error', 'You have entered incorrect credentials 3 times. You will be redirected to the welcome page.');
        navigation.navigate('Welcome');
      } else {
        Alert.alert('Error', 'Incorrect username or password. Please try again.');
      }
    } else {
      navigation.navigate('NewAdminScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput 
        style={styles.input} 
        value={username} 
        onChangeText={(text) => setUsername(text)} 
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput 
        style={styles.input} 
        value={password} 
        onChangeText={(text) => setPassword(text)} 
        secureTextEntry
      />
      <Button title="Submit" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default AdminScreen;
