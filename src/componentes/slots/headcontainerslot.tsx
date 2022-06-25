import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';


//LOGIN
export function HeadContainerSlot () {

    return (
        <View style={styles.headcontainer}>
            <Text style={styles.title1}>Slots do Dispositivo</Text>     
        </View>        
    );
  }
  
  const styles = StyleSheet.create({

    headcontainer:{
        flex:0,
        width:315,
        height: 25,
        alignItems: 'center',
    },

    //CSS DE TEXTO
    title1:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#DEDBDB',

    },

    title2:{
      textAlign: 'left',
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
  

