import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

const VolunteerLoginPage = ({ onLogin }) => {

  const navigation = useNavigation();

  const handleGoBackPress = () => {
    // Handle Go Back button press
    navigation.goBack();
    console.log('Go back button pressed');
  };

  const handleSubmitPress = () => {
    // Handle Submit button press
    onLogin();
    console.log('Submit button pressed');
  };

  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <View style={styles.container}>
        <Image
            source={require('./img/u2hlogo.png')}
            style={styles.image}
        />
        <Text style={styles.title}>United2Heal</Text>
        <Text style={styles.description}>Please Enter Your Name</Text>
        <SafeAreaView>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="useless placeholder"
        />
      </SafeAreaView>
        <TouchableOpacity
            style={styles.button}
        >
        </TouchableOpacity>
        
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleGoBackPress}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={() => handleSubmitPress()}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  buttonsContainer: {
    flex: 0,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
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
    width: '50%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#4285F4',
  },
  cancelButton: {
    backgroundColor: '#D3D3D3',
  },
  input: {
    backgroundColor: "white"
  },
});

export default VolunteerLoginPage;


