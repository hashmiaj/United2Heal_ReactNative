import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchTab = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Search tab.</Text>
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

export default SearchTab;