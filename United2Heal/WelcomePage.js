import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="user" size={30} color="#900" />;

const WelcomePage = () => {
  
  const handleVolunteerPress = () => {
    // Handle Volunteer button press
    console.log('Volunteer button pressed');
  };

  const handleAdminPress = () => {
    // Handle Admin button press
    console.log('Admin button pressed');
  };

  return (
    <View style={styles.container}>
        <Image
            source={require('./img/u2hlogo.png')}
            style={styles.image}
        />
        <Text style={styles.title}>United2Heal</Text>
        <Text style={styles.description}>Please select between the options below:</Text>
        <TouchableOpacity
            style={styles.button}
        >
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.adminButton]} onPress={handleAdminPress}>
            <Text style={styles.buttonText}>Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.adminButton]} onPress={handleVolunteerPress}>
            <Text style={styles.buttonText}>Volunteer</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center'
  },
  description: {
    fontSize: 15,
    textAlign: 'center'
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  adminButton: {
    backgroundColor: '#4285F4',
  },
});

export default WelcomePage;



