import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import CardSlot from './cardslot';
import slots from '../../pequenoback/slots';

export interface ScrollViewProps {
  slots: any[]
}
//LOGIN
export function ScrollViewSlot (props: ScrollViewProps) {


  return (  
      <View style={{height:450}}>  
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        {props.slots.map(slot => <CardSlot key={slot.idSlot} slot={slot} />)}
      </ScrollView>
      </View>        

     
  );}
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#0077B6',
      alignItems: 'center',
    },
    list:{
      width:300

    },

    container:{
      flex:0,
      width: 315,
      height: 420,
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
  

