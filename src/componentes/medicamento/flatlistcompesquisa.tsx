import * as React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import results from '../../pequenoback/slots';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import ListaMedicamentos from './listamedicamentos';
import medicamentos from '../../pequenoback/medicamentos'

export interface ListaComBarraProps {
}
//LOGIN
export function ListaComBarra (props: ListaComBarraProps) {

  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(medicamentos);

  useEffect(() => {
    if (searchText === '') {
      setList(medicamentos)
      ;
    } else {
      setList(
        medicamentos.filter(
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
    <SafeAreaView style={styles.background}>

      <View style={styles.barra}>
        <TextInput
          style={styles.inputContainer}
          placeholder="Pesquise um medicamento"
          placeholderTextColor="#DEDBDB"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
          />
          <TouchableOpacity onPress={handleOrderClick} style={styles.btn}>
            <MaterialCommunityIcons
              name="order-alphabetical-ascending"
              size={24}
              color="#DEDBDB"
            />
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <FlatList
          data={list}
          style={styles.list}
          renderItem={({ item }) => <ListaMedicamentos data={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}          
          />    
      </View>
      

    </SafeAreaView>
      
        
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#0077B6',
      alignItems: 'center',
    },
    list:{
      width:300

    },

    inputContainer: { 
      backgroundColor: '#0077B6',
      borderColor:"#DEDBDB",
      borderWidth: 1,
      borderRadius: 15,
      width: 250,
      height: 30,
      color:"#DEDBDB"
    },

    head:{
      alignItems:'center',
      width: 315,
      height: 45,
      marginTop:80,
    },
  
    logo:{
      width:245,
      height:140,    
    },

    container:{
      flex:0,
      width: 315,
      height: 420,
      marginTop: 50,
      alignItems: 'center',
    },

    btn:{
      borderColor: '#DEDBDB',
    },

    barra:{
      flex:0,
      width: 315,
      height: 50,
      marginTop:5,
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
    },

    //CSS DE TEXTO
    title1:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#DEDBDB',

    },

    title2:{
      textAlign: 'center',
      fontSize: 14,
      fontWeight: 'bold',
      color: '#DEDBDB',

    },

    text1:{
      textAlign: 'center',
      fontSize: 10,
      color: '#DEDBDB',
    },

    text2:{
      textAlign: 'center',
      fontSize: 10,
      color: '#DEDBDB',

    },
  });
  

