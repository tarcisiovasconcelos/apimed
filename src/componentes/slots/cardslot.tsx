import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

//Propriedades do FlatList (data é uma delas)
export interface CardiSlotProps {
  dispositivo:any;
}


export function CardiSlot (props: CardiSlotProps) {
  const nav = useNavigation();
  const { dispositivo } = props;
    
  return (

        <Card containerStyle={styles.card} >
            <View style={styles.cardhead}>
                <Text style={styles.title2}>{dispositivo.slot.name}</Text>
                <Text style={styles.text1}>{dispositivo.slot.status} </Text>
                <TouchableOpacity onPress={() => nav.navigate('Tela-Home', {dispositivo})}>
                    <Entypo name="dots-three-vertical" size={24} color="#DEDBDB" />
                </TouchableOpacity>
            </View>

        </Card>

  );
};

const styles = StyleSheet.create({  

  card:{
    flex:0,
    justifyContent:'center',
    width:280,
    height:80,
    borderRadius:15,
    backgroundColor:'green'
  },

  cardhead:{
    flex:0,
    height:30,
    marginRight:10,
    marginLeft:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },

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

    fontSize: 10,
    color: '#DEDBDB',
  },

  text2:{
    textAlign: 'center',
    fontSize: 10,
    color: '#DEDBDB',

  },
});

export default CardSlot;
