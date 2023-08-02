// VolunteerScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator, Alert, Animated } from 'react-native';

const VolunteerScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [sessionGroup, setSessionGroup] = useState('');
  const [loading, setLoading] = useState(false);
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  const handleSubmit = () => {
    // Check if inputs are empty
    if (fullName === '' || sessionGroup === '') {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    // Handle the submit logic here
    console.log('Full Name: ', fullName);
    console.log('Session Group: ', sessionGroup);

    // Start loading animation
    setLoading(true);

    // Simulate a network request with a timeout
    setTimeout(() => {
      // Stop loading animation
      setLoading(false);
      
      // Navigate to the new screen
      navigation.navigate('NewVolunteerScreen');
    }, 1000); // 1 seconds delay
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Animated.View style={{opacity: fadeAnim}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </Animated.View>
      ) : (
        <>
          <Text style={styles.label}>Full Name:</Text>
          <TextInput 
            style={styles.input} 
            value={fullName} 
            onChangeText={(text) => setFullName(text)} 
          />
          <Text style={styles.label}>Session Group:</Text>
          <TextInput 
            style={styles.input} 
            value={sessionGroup} 
            onChangeText={(text) => setSessionGroup(text)} 
          />
          <Button title="Submit" onPress={handleSubmit} />
        </>
      )}
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

export default VolunteerScreen;

