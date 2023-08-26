import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdminOpenBoxTab = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Admin Open Box tab.</Text>
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

export default AdminOpenBoxTab;