import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Cardi } from '../../componentes/home/card';
import { CardiSlot } from './cardslot';



export interface ScrollViewVerticalProps {
  dispositivos: any[]
}
//LOGIN
export function ScrollViewVertical (props: ScrollViewVerticalProps) {


  return (  
      <View style={{height:450}}>  
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        {props.dispositivos.map(dispositivo => <CardiSlot key={dispositivo.idDispositivo} dispositivo={dispositivo} />)}
      </ScrollView>
      </View>        

     
  );}
  

