import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';



export interface HeadContainerProps {
}
//LOGIN
export function HeadContainer (props: HeadContainerProps) {

    const nav = useNavigation();


    return (
        <View style={styles.headcontainer}>
            <Text style={styles.title2}>Meus Dispositivos</Text>
            <TouchableOpacity onPress={() => nav.navigate('Tela-InsertDispositivo')}>
            <AntDesign name="plus" size={24} color="#DEDBDB" />
            </TouchableOpacity>     
        </View>        
    );
  }
  
  const styles = StyleSheet.create({

    headcontainer:{
        flex:0,
        flexDirection:'row',
        justifyContent:'space-between',
        width:300,
        marginLeft:15,
        height: 25,
        marginTop: 50,
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
  

