// AdminScreen.js

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';

const AdminScreen = ({ onLogin}) => {
  const navigation = useNavigation();

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
      onLogin();
      console.log('Submit button pressed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>United2Heal</Text>
      <Image
            source={require('./img/u2hlogo.png')}
            style={styles.image}
        />
      <Text style={styles.title}>Admin Login</Text>
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
        <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={() => handleLogin()}>
                <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  buttonsContainer: {
    flex: 0,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  pageTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center'
  },
  label: {
    fontSize: 16,
  },
  button: {
    width: '75%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 8,
    backgroundColor: '#4285F4',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default AdminScreen;
