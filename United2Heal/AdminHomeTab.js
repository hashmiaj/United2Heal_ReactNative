import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdminHomeTab = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Admin Home tab.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AdminHomeTab;