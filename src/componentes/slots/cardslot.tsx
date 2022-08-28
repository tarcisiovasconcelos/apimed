import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
import { Card } from 'react-native-elements';

//Propriedades do FlatList (data é uma delas)
export interface ICardSlot {
  slot:any;
}

//Propriedades do slot que vem dentro da propriedade data do Flatlist
export interface ISlot {
  id: number,
  name: string,
  status: string
}

export function CardSlot(props:ICardSlot)  {
  
  useEffect(() => {});
  
  return (

        <Card containerStyle={styles.card} >
            <View style={styles.cardhead}>
                <Text style={styles.title2}>Nome Slot</Text>
                <Text style={styles.text1}>Status</Text>
                <TouchableOpacity>
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
