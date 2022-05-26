import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
import { Cardi } from '../../componentes/card';


export interface HomeProps {
}
//LOGIN
export function Home (props: HomeProps) {


    return (
    <View style={styles.background}>
        <View style={styles.head}>
            <Text style={styles.title1}>Olá {<Text style={styles.title2}>Tarcisio 
            Vasconcelos</Text>}, seja bem-vindo(a)!</Text>
            
        </View>

        <View style={styles.headcontainer}>
            <Text style={styles.title2}>Meus Dispositivos</Text>
            <TouchableOpacity>
            <AntDesign name="plus" size={24} color="#DEDBDB" />
            </TouchableOpacity>     
        </View>
        
        <View style={styles.container}>
        <ScrollView horizontal={true}>
          <Cardi/>
          <Cardi/>
          <Cardi/>
          <Cardi/>
          <Cardi/>
        </ScrollView>        
        </View>        

    </View>
      
        
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#0077B6',
    },

    head:{
      flex:0,
      alignItems:'center',
      width: 390,
      marginLeft:10,
      height: 50,
      marginTop:80,
    },

    headcontainer:{
        flex:0,
        flexDirection:'row',
        justifyContent:'space-between',
        width:300,
        marginLeft:15,
        height: 25,
        marginTop: 50,
    },

    container:{
      flex:0,
      flexDirection:'row',
      width: 400,
      height: 455,
      backgroundColor:'#0077B6'
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
  

