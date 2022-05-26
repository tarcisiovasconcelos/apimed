import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons'; 
import { Card } from 'react-native-elements';
import { InfoDisp } from './infodisp';

export interface CardiProps {
}

export function Cardi (props: CardiProps) {


    return (
        <Card wrapperStyle={styles.carditens} containerStyle={styles.card}>
          {/*react-native-elements Card*/}
          <View style={styles.cardhead}>
          <TouchableOpacity>
          <AntDesign name="downcircleo" size={24} color="#DEDBDB" />
          </TouchableOpacity>
          <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={24} color="#DEDBDB" />
          </TouchableOpacity>
          </View>
          
          <View style={styles.cardimagem}>
          <Text>
            Imagem
          </Text>
          </View>
          <InfoDisp/>

        </Card>
        );
    }

const styles = StyleSheet.create({
    card:{
        width:300,
        height:420,
        borderRadius:15,
        backgroundColor:'#0077B6'
  
      },
      carditens:{
        flex:0,
        flexDirection:'column',
        height:395
  
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
  
      cardimagem:{
        backgroundColor: 'silver',
        marginTop:15,
        marginRight:10,
        marginLeft:10,
        height:200
      },
      
      infodisp:{
        flex:0,
        marginTop:15,
        marginRight:10,
        marginLeft:10,
        height: 100
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