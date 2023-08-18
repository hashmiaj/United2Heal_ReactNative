import React, { useRef, useState, useMemo, useCallback } from 'react';
import { View, Alert, ActivityIndicator, Text, TextInput, Button, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet";
import U2HConfigNode from './U2HConfigNode';
import Divider from './Divider';

const ItemPage = ({ route }) => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null); // Create a ref for the BottomSheet

  const { itemName, itemId } = route.params;

  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [noExpiration, setNoExpiration] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [boxNumbers, setBoxNumbers] = useState('');
  const [selectedBoxNumber, setSelectedBoxNumber] = useState('');
  const [isBoxNumberSelected, setIsBoxNumberSelected] = useState(false);

  const snapPoints = useMemo(() => ["40%"], []);

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);

  const handleCloseIconPress = () => {
    closeBottomSheet(); // Close the bottom sheet when the icon is pressed
  };

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  const renderItem = useCallback(
    ({ item }) => (
      <View>
        <TouchableOpacity style={styles.boxNumberItem} onPress={() => {
          setSelectedBoxNumber(item); // Update selected group name
          setIsBoxNumberSelected(true);
          closeBottomSheet(); // Close the bottom sheet
        }}>
          <Text style={styles.boxNumberText}>{item}</Text>
        </TouchableOpacity>
        <Divider/>
      </View>
    ),
    []
  );

  const getBoxNumbers = async () => {
    if (boxNumbers.length > 0) {
      openBottomSheet();
    } 
    else {
      setIsLoading(true);
      try {
        const response = await fetch(`https://l2glmsg7jb.execute-api.us-east-1.amazonaws.com/?GroupName=${U2HConfigNode.getGroupName()}`);
        if (!response.ok) { 
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const boxNumbers = data.map(item => item.BoxNumber);
        setBoxNumbers(boxNumbers);
        openBottomSheet();
      } catch (error) {
        Alert.alert('Error', error.message);  // Show the actual error message
      } finally {
        setIsLoading(false); // <-- Ensure loading stops after the fetch
      }
    }
  };

  const handleSubmit = async () => {
    // Check if all fields are filled
    if (!itemName || !itemId || !quantity || (!noExpiration && !expirationDate) || !isBoxNumberSelected) {
        Alert.alert('Error', 'Please fill in all fields.');
        return;
    }

    // Construct the API endpoint with the required parameters
    const apiUrl = `https://6o9shphxm2.execute-api.us-east-1.amazonaws.com/?ItemID=${itemId}&GroupName=Z&BoxNumber=${selectedBoxNumber}&ItemName=${itemName}&ItemQuantity=${quantity}&ExpirationDate=${noExpiration ? 'None' : expirationDate.toISOString()}&School=VCU`;

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
      {isLoading && 
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      }
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
      <Text style={styles.descriptionText}>Select the box you're putting the item in.</Text>
      <TouchableOpacity style={styles.dropdownContainer} onPress={getBoxNumbers}>
        <Text style={styles.dropdownText}>{isBoxNumberSelected ? selectedBoxNumber : 'Select Box Number'}</Text>
        <Icon style={{ position: 'absolute', right: 12}} name='caret-down' size={22} color='#000000'/>
      </TouchableOpacity>

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
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <View style={styles.bottomSheetTitleContainer}>
          <Text style={styles.dropdownText}>Select Box Number</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 12}} onPress={handleCloseIconPress}>
            <Icon  name="times" size={18} color="black" />
          </TouchableOpacity>
        </View>
        <BottomSheetSectionList
          sections={[{ title: 'Select Box Number', data: boxNumbers }]}
          keyExtractor={(item) => item}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
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
  boxNumberItem: {
    alignItems: 'center',
    marginTop: 4
  },
  bottomSheetTitleContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  boxNumberText: {
    marginTop: 8,
    fontSize: 18,
    color: 'black',
  },
  dropdownText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    zIndex: 10  // Ensure the overlay is above all other components
  },
});

export default ItemPage;

