import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { getSearchItemsList } from './U2HConfigNode'; // Import the getSearchItemsList function

const SearchTab = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(getSearchItemsList()); // Use the data from U2HConfigNode

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredItems = getSearchItemsList().filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ padding: 16 }}>
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
        <Text style={{ fontSize: 16, color: 'gray' }}>ItemID: {item.id}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <TextInput
        style={{ padding: 10, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Search..."
        value={searchText}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Use item.id as the key
      />
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