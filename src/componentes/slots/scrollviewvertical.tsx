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
      <View style={{flex:0,alignItems:'center',height:'70%',width:'90%'}}>  
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        {props.slots.map(slot => 
            <>
              <View>
              <CardiSlot key={slot.idSlot} slot={slot} teste={teste}/>
              </View>
            </>
            )}
      </ScrollView>
      </View>        

     
  );}
  

