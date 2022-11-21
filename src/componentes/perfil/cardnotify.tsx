import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

//Propriedades do FlatList (data é uma delas)
export interface CardiNotifyProps {
  notify:any;
  
}


export function CardiNotify (props: CardiNotifyProps) {
  const nav = useNavigation();

  const { notify } = props;
  console.log(notify)




    
  return (

        <Card containerStyle={styles.card} >
            <View style={styles.cardhead}>
                <Text style={styles.title2}>{notify[0]}</Text>
            </View>

        </Card>

  );
};

const styles = StyleSheet.create({  

  card:{
    flex:0,
    justifyContent:'center',
    width:'91%',
    height:80,
    borderRadius:15,
    backgroundColor: '#00B4D8',
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
    color: 'black',

  },

  text1:{

    fontSize: 10,
    color: 'black',
  },

  text2:{
    textAlign: 'center',
    fontSize: 10,
    color: '#DEDBDB',

  },
});

