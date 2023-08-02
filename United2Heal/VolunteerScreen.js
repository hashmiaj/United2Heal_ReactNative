// VolunteerScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const VolunteerScreen = () => {
  const [fullName, setFullName] = useState('');
  const [sessionGroup, setSessionGroup] = useState('');

  const handleSubmit = () => {
    // Handle the submit logic here
    console.log('Full Name: ', fullName);
    console.log('Session Group: ', sessionGroup);
  };

  return (
    <View style={styles.container}>
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

