import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';

export interface HomeProps {

}

interface User {
  name: string;
}
//LOGIN
export function Home (props: HomeProps) {
    const [user, setUser] = useState<User>({} as User);


    return (
    <View style={styles.background}>
        <View style={styles.head}>
            <Text style={styles.title1}>Ola, seja bem-vindo(a)!</Text>
            <Text style={styles.title2}>Nome Aqui: {user.name}</Text>
        </View>

        <View style={styles.headcontainer}>
            <Text style={styles.title2}>Meus Dispositivos</Text>
            <TouchableOpacity>
            <AntDesign name="plus" size={24} color="#DEDBDB" />
            </TouchableOpacity>     
        </View>

        <View style={styles.container}>        
    
        </View>
        <View style={styles.rodape}>

        </View>

    </View>
      
        
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#0077B6',
      alignItems: 'center',
    },

    head:{
      alignItems:'center',
      width: 315,
      height: 50,
      marginTop:80,
      backgroundColor:'green'
    },
  
    logo:{
      width:245,
      height:140,    
    },

    headcontainer:{
        flex:0,
        flexDirection:'row',
        justifyContent:'space-between',
        width:315,
        height: 25,
        marginTop: 50,
    },

    container:{
      flex:0,
      width: 315,
      height: 455,
      marginTop: 5,
      backgroundColor: 'purple'
    },

    btn:{
      flexDirection:'column',
      borderRadius: 15,
      backgroundColor: '#00B4D8',
      width: 165,
      borderColor: '#DEDBDB',
      borderRightWidth: 5,
      borderLeftWidth: 5, 
    },

    rodape:{
      flex:0,
      width: 315,
      height: 50,
      marginTop:50,
      alignItems: 'center',
      backgroundColor:'black',
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
  

