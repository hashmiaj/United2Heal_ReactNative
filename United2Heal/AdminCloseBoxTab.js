import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdminCloseBoxTab = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Admin Close Box tab.</Text>
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

export default AdminCloseBoxTab;