import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

//Propriedades do FlatList (data é uma delas)
export interface CardiSlotProps {
  slot:any;
  teste:any
}


export function CardiSlot (props: CardiSlotProps) {
  const nav = useNavigation();
  const { slot } = props;
  const { teste } = props;




    
  return (

        <Card containerStyle={styles.card} >
            <View style={styles.cardhead}>
                <Text style={styles.title2}>{slot.nome}</Text>
                <Text style={styles.text1}>{slot.status}</Text>
            </View>
            <TouchableOpacity onPress={() => nav.navigate('Tela-UpdateSlot', {slot,teste})}>
                    <Entypo name="dots-three-horizontal" size={24} color="white" />
            </TouchableOpacity>
        </Card>

  );
};

const styles = StyleSheet.create({  

  card:{
    flex:0,
    justifyContent:'center',
    width:150,
    height:140,
    borderRadius:10,
    borderColor:'transparent',
    backgroundColor: '#4663AE',
  },

  cardhead:{
    flex:0,
    height:'80%',
    marginRight:10,
    marginLeft:10,
    flexDirection:'column',
    alignItems:'center',
  },

  title2:{
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop:'30%'

  },

  text1:{

    fontSize: 14,
    color: 'white',
  },

});

