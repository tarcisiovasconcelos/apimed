import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CardiSlot } from './cardislot';





export interface ScrollViewVerticalProps {
  slots: any[]
  teste:any[]
}
//LOGIN
export function ScrollViewVertical (props: ScrollViewVerticalProps) {

  const { teste } = props;


  return (  
      <View style={{minHeight:260,width:'80%'}}>  
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={{minHeight:250}}>
        {props.slots.map(slot => 
            <>
              <CardiSlot key={slot.idSlot} slot={slot} teste={teste}/>
            </>
            )}
      </ScrollView>
      </View>        

     
  );}
  

