import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import U2HConfigNode from './U2HConfigNode';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HomeTab = () => {
  const volunteerName = U2HConfigNode.getVolunteerName();
  const groupName = U2HConfigNode.getGroupName();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {volunteerName}</Text>
      <Text style= {styles.description}>Group: {groupName}</Text>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    color: '#0000FF', 
    marginTop: 50,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 20, 
    marginTop: 20,
    fontWeight: 'bold'
  }
});

export default HomeTab;