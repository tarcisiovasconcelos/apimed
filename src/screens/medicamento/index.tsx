import React from 'react';
import { useState, useEffect } from 'react';
import {  SafeAreaView,  View,  TextInput,  FlatList,  StyleSheet,  TouchableOpacity, ImageBackground, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListItem from './ListItem';
import results from './results';

export interface MedicamentoProps {
}
export function Medicamento(props: MedicamentoProps) {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(results);

  useEffect(() => {
    if (searchText === '') {
      setList(results);
    } else {
      setList(
        results.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  const handleOrderClick = () => {
    let newList = [...list];

    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setList(newList);
  };

  return (
    <ImageBackground  source={require('./../../assets/imgs/bg2.png')}
    style={styles.background}>
    <SafeAreaView style={styles.container}>

      <View style={styles.cabecalho}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise um medicamento"
          placeholderTextColor='grey'
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>
          <MaterialCommunityIcons
            name="order-alphabetical-ascending"
            size={32}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
      <FlatList
        data={list}
        style={styles.list}
        renderItem={({ item }) => <ListItem data={item} />}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="light" />
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  background: {
    width: '100%',
    height: '100%',  
  },

  cabecalho:{
    flex:2,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  container: {
    flex: 5,
  },

  input: {
    flex: 1,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#FFFFFF',
    marginLeft:30
  },

  orderButton: {
    width: 32,
    marginRight: 30,
    marginBottom:8
  },
  
  list: {
    flex: 1,
  },

});