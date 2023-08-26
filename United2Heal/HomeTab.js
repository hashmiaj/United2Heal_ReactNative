import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import U2HConfigNode from './U2HConfigNode';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HomeTab = () => {
  const volunteerName = U2HConfigNode.getVolunteerName();
  const groupName = U2HConfigNode.getGroupName();
  const itemCount = 50;

  const instructions = `
1. Search for the item you have picked up, if the item doesn't appear add it in the Add Item tab.

2. Once you've found the item, enter the important information like quantity, expiration date, and box number.

3. Verify the information is correct and submit the item in the box.

4. Watch your submitted items grow!
    `;

  return (
    <View style={styles.container}>
      <View style={styles.outline}>
        <Text style={styles.title}>Welcome {volunteerName}!</Text>
        <Text style= {styles.description}>Group: {groupName}</Text>
      </View>
      <View style={styles.outline}>
       <Text style= {styles.submittedItems}>Instructions!</Text>
       <Text style= {styles.summary}>{instructions}</Text>
      </View>
      <View style={styles.outline}>
       <Text style= {styles.submittedItems}>Submitted Items</Text>
       <Text style= {styles.itemCount}>{itemCount}</Text>
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  outline: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 8,
    alignItems: 'center',
    padding: 16,
    width: '85%',
  },
  title: {
    fontSize: 32,
    color: '#0000FF', 
    fontWeight: 'bold'
  },
  description: {
    fontSize: 20, 
    marginTop: 10,
    fontWeight: 'bold'
  },
  summary: {
    fontSize: 13,
    textAlign: 'justify',
  },
  submittedItems: {
    fontSize: 28,
  },
  itemCount: {
    fontSize: 40,
    marginTop: 10,
  }
});

export default HomeTab;