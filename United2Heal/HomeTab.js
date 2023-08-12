import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeTab = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Home tab.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default HomeTab;