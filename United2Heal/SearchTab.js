import React, { useState, Component } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { getSearchItemsList } from './U2HConfigNode';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Divider from './Divider';

const SearchTab = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(getSearchItemsList()); 

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredItems = getSearchItemsList().filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  const renderItem = ({ item }) => {
    return (
        <View style={{marginTop: 12}}>
        <TouchableOpacity>
          <View style={styles.listItem}>
            <Icon style={{marginRight: 16}} name='first-aid' size={24} color='#000000'/>
            <View style={{width: '90%'}}>
              <Text style={{ fontSize: 16 }} numberOfLines={2}>{item.name}</Text>
              <Text style={{ fontSize: 12, color: 'gray' }}>ItemID: {item.id}</Text>
            </View>
              <Icon style={{marginLeft: 4 }} name='angle-right' size={22} color='#000000'/>
          </View>
        </TouchableOpacity>
        <Divider />
        </View>
    );
  };

  return (
    <View style={styles.listView}>
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
  listView: {
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textInput: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  listItem: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    flex: 1,
  }
});

export default SearchTab;