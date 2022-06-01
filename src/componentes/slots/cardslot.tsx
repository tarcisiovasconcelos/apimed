import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
import { Card } from 'react-native-elements';


const CardSlot = ({ data }) => {

  useEffect(() => {});
  return (

        <Card wrapperStyle={styles.carditens} containerStyle={styles.card} >
            <View style={styles.cardhead}>
                <Text style={styles.title2}>{data.name}</Text>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="#DEDBDB" />
                </TouchableOpacity>
            </View>

        </Card>

  );
};

const styles = StyleSheet.create({
  

  card:{
    width:280,
    height:80,
    borderRadius:15,
    backgroundColor:'green'
  },
  carditens:{
    flex:0,
    flexDirection:'column',
    height:300

  },

  cardhead:{
    flex:0,
    height:40,
    marginTop:15,
    marginRight:10,
    marginLeft:10,
    flexDirection:'row',
    justifyContent:'space-between'
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

export default CardSlot;
