import React, { useEffect, useRef, useState } from 'react';
<<<<<<< Updated upstream
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, TextInput, SafeAreaView } from 'react-native';

const VolunteerLogin = ({ navigation }) => {
  
  const handleGoBackPress = () => {
    // Handle Go Back button press
    navigation.goBack();
  };
  const handleSubmitPress = () => {
    // Handle Submit button press
  };
  const [volunteerName, setVolunteerName] = useState('');

  const [text, onChangeText] = React.useState('Useless Text');
=======
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const VolunteerLoginPage = () => {
  
  const handleVolunteerPress = () => {
    // Handle Volunteer button press
    console.log('Volunteer button pressed');
  };

  const handleAdminPress = () => {
    // Handle Admin button press
    console.log('Admin button pressed');
  };
>>>>>>> Stashed changes

  return (
    <View style={styles.container}>
        <Image
            source={require('./img/u2hlogo.png')}
            style={styles.image}
        />
        <Text style={styles.title}>United2Heal</Text>
        <Text style={styles.description}>Please Enter Your Name</Text>
<<<<<<< Updated upstream
        <View>
        <TextInput 
        style={styles.input} 
        value={volunteerName} 
        onChangeText={(text) => setVolunteerName(text)} 
      />
      </View>
=======
>>>>>>> Stashed changes
        <TouchableOpacity
            style={styles.button}
        >
        </TouchableOpacity>
<<<<<<< Updated upstream
        
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleGoBackPress}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmitPress}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
=======
        <TouchableOpacity style={[styles.button, styles.adminButton]} onPress={handleAdminPress}>
            <Text style={styles.buttonText}>Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.adminButton]} onPress={handleVolunteerPress}>
            <Text style={styles.buttonText}>Volunteer</Text>
        </TouchableOpacity>
>>>>>>> Stashed changes
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
<<<<<<< Updated upstream
    height: '100%',
=======
    flex: 1,
>>>>>>> Stashed changes
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
<<<<<<< Updated upstream
  buttonsContainer: {
    flex: 0,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    width: '50%',
=======
    width: '100%',
>>>>>>> Stashed changes
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
<<<<<<< Updated upstream
    marginHorizontal: 8,
=======
>>>>>>> Stashed changes
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
<<<<<<< Updated upstream
  submitButton: {
    backgroundColor: '#4285F4',
  },
  cancelButton: {
    backgroundColor: '#D3D3D3',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'column',
  },
});

export default VolunteerLogin;

// Add a please select your group drop down menu using https://gorhom.github.io/react-native-bottom-sheet/
=======
  adminButton: {
    backgroundColor: '#4285F4',
  },
});

export default VolunteerLoginPage;


>>>>>>> Stashed changes
