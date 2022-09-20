import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CardiSlot } from './cardislot';





export interface ScrollViewVerticalProps {
  dispositivos: any[]
}
//LOGIN
export function ScrollViewVertical (props: ScrollViewVerticalProps) {


  return (  
      <View style={{minHeight:260,width:'80%'}}>  
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={{minHeight:250}}>
        {props.dispositivos.map(dispositivo => <CardiSlot key={dispositivo.idDispositivo} dispositivo={dispositivo} />)}
      </ScrollView>
      </View>        

     
  );}
  

