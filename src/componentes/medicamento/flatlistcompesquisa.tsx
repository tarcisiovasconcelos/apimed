import * as React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import results from '../../pequenoback/slots';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import ListaMedicamentos from './listamedicamentos';
import medicamentos from '../../pequenoback/medicamentos';
import { child, getDatabase, onValue, ref } from 'firebase/database';
import { getAuth } from 'firebase/auth';

import "firebase/compat/auth";
import "firebase/compat/firestore";

export interface ListaComBarraProps {
}
//flatlist
export function ListaComBarra (props: ListaComBarraProps) {
  
  const database = getDatabase();
  let [medicamentos, setMedicamentos] = useState<any[]>([]);
  //meti aqui 
  const [list, setList] = useState<any[]>([]);

  


  const [searchText, setSearchText] = useState('');
  const refNome = ref(database, 'medicamentos');

  //Busca por dados de medicamentos/firebase
  React.useEffect(() => {
    onValue(refNome, (snapshot) => {
      console.log('AAAA');
      console.log(snapshot.val())
      setList(snapshot.val())
      setMedicamentos(snapshot.val())
    })
  },[])

  useEffect(() => {
    if (searchText == '') {
      setList(medicamentos);
    } else {
      setList(
        medicamentos.filter(
          (item) =>
            item.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  const handleOrderClick = () => {
    let newList = [...list];

    newList.sort((a, b) => (a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0));

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
          extraData={list}
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
      width:'80%',
      backgroundColor: '#3556AA',
      alignItems: 'center',
    },
    list:{
      width:'100%'

    },

    inputContainer: { 
      backgroundColor: '#3556AA',
      borderColor:"#DEDBDB",
      borderWidth: 1,
      borderRadius: 5,
      width: 250,
      height: 30,
      paddingLeft: 10,
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
      width: '100%',
      height: 420,
      marginTop: 20,
      alignItems: 'center',
      backgroundColor:'#3556AA',
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
  



