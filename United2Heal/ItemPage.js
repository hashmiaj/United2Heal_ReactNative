import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemPage = ({ route }) => {
  const navigation = useNavigation();

  const { itemName, itemId } = route.params;

  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [noExpiration, setNoExpiration] = useState(false);
  const [itemBox, setItemBox] = useState('');

  const handleSubmit = async () => {
    // Check if all fields are filled
    if (!itemName || !itemId || !quantity || (!noExpiration && !expirationDate) || !itemBox) {
        Alert.alert('Error', 'Please fill in all fields.');
        return;
    }

    // Construct the API endpoint with the required parameters
    const apiUrl = `https://6o9shphxm2.execute-api.us-east-1.amazonaws.com/?ItemID=${itemId}&GroupName=Z&BoxNumber=${itemBox}&ItemName=${itemName}&ItemQuantity=${quantity}&ExpirationDate=${noExpiration ? 'None' : expirationDate.toISOString()}&School=VCU`;

    try {
        // Make the API call
        const response = await fetch(apiUrl, {
            method: 'POST'
        });

        // Check if the API call was successful
        if (response.ok) {
            const responseData = await response.json();

            // Handle the response data as needed. 
            // For now, just navigating back to the home screen.
            navigation.navigate('Home');
        } else {
            // If the server returns a response outside the range 200-299, it will be considered an error
            Alert.alert('Error', 'Failed to submit the item. Please try again.');
        }
    } catch (error) {
        // Handle any other errors (e.g., network issues)
        Alert.alert('Error', 'An error occurred. Please check your connection and try again.');
    }
};

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Item Name:</Text>
      <Text>{itemName}</Text>

      <Text style={styles.headerText}>Item ID:</Text>
      <Text>{itemId}</Text>

      <Text style={styles.headerText}>Item Quantity:</Text>
      <Text style={styles.descriptionText}>Enter the quantity of the item.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Item Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />

        <Text style={styles.headerText}>Expiration Date:</Text>
      <Text style={styles.descriptionText}>Select the expiration date of the item.</Text>
      <TouchableOpacity style={styles.dateBox} onPress={() => setShowDatePicker(true)}>
        <Text>{noExpiration ? "No Expiration" : expirationDate.toDateString()}</Text>
        <Icon name="caret-down" size={16} style={styles.dropdownIcon} />
      </TouchableOpacity>
      
      <View style={styles.checkboxContainer}>
        <Icon name={noExpiration ? 'check-square' : 'square'} size={20} onPress={() => {
          setNoExpiration(!noExpiration);
          if (!noExpiration) {
            setShowDatePicker(false);
            setExpirationDate(new Date());
          }
        }} />
        <Text>No Expiration</Text>
      </View>

      <Text style={styles.headerText}>Item Box:</Text>
      <Text style={styles.descriptionText}>Enter details about the item's box.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Item Box Details"
        value={itemBox}
        onChangeText={setItemBox}
      />

      <Button title="Submit" onPress={handleSubmit} />

      <Modal
        visible={showDatePicker}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <DatePicker
            date={expirationDate}
            onDateChange={setExpirationDate}
            mode="date"
          />
          <Button title="Done" onPress={() => setShowDatePicker(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,  
    marginTop: 10,
  },
  descriptionText: {
    fontStyle: 'italic',
    fontSize: 12,
    color: '#777',
    marginBottom: 5
  },
  input: {
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Changing the background color to white
    margin: 20, 
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  dropdownIcon: {
    marginLeft: 10,
  },
});

export default ItemPage;

