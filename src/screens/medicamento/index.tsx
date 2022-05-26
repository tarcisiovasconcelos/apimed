import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import results from './results';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import ListaMedicamentos from '../../componentes/medicamento/listamedicamentos';
import { TitleMedicamentos } from '../../componentes/medicamento/title';
import { ListaComBarra } from '../../componentes/medicamento/listacompesquisa';


export interface MedicamentoProps {
}
//LOGIN
export function Medicamento (props: MedicamentoProps) {

  const [searchText] = useState('');
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


    return (
    <SafeAreaView style={styles.background}>
    
      <TitleMedicamentos/>

      <ListaComBarra/>
      

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
      height: 350,
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
  

