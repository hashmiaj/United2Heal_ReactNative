import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import U2HConfigNode from './U2HConfigNode';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HomeTab = () => {
  const volunteerName = U2HConfigNode.getVolunteerName();
  const groupName = U2HConfigNode.getGroupName();
  const itemCount = 50;

  return (
    <View style={styles.container}>
      <View style={styles.outline}>
        <Text style={styles.title}>Welcome {volunteerName}!</Text>
        <Text style= {styles.description}>Group: {groupName}</Text>
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
    marginTop: 32,
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
    marginTop: 20,
    fontWeight: 'bold'
  },
  submittedItems: {
    fontSize: 28,
  },
  itemCount: {
    fontSize: 60,
    marginTop: 20,
  }
});

export default HomeTab;