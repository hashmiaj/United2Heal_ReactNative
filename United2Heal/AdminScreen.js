// AdminScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AdminScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle the login logic here
    console.log('Username: ', username);
    console.log('Password: ', password);
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