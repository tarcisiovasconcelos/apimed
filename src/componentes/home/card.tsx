import * as React from 'react';
import { StyleSheet, View, Text, ProgressViewIOSComponent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons'; 
import { Card, Image } from 'react-native-elements';
import { InfoDisp } from './infodisp';
import { useNavigation } from '@react-navigation/native';

export interface CardiProps {
  dispositivo:any;
}

export function Cardi (props: CardiProps) {
  const nav = useNavigation();
  const { dispositivo } = props;
  console.log(dispositivo)

    return (
        <Card wrapperStyle={styles.carditens} containerStyle={styles.card}>
          {/*react-native-elements Card*/}
          <View style={styles.cardhead}>
          <TouchableOpacity onPress={() => nav.navigate('Tela-UpdateDispositivo', {dispositivo})}>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </TouchableOpacity>
          </View>
          
          <View style={styles.cardimagem}>
          <Image style={styles.logo} source={require('./../../assets/imgs/dispositivo.png')}/>
          </View>
          <InfoDisp dispositivo={dispositivo}/>

        </Card>
        );
    }

const styles = StyleSheet.create({
    card:{
        width:300,
        height:420,
        borderRadius:15,
        backgroundColor:'#00B4D8'
  
      },

      logo:{
        width:'100%',
        height:'100%',    
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
        justifyContent:'flex-end'
      },
  
      cardimagem:{
        marginTop:15,
        marginRight:10,
        marginLeft:10,
        height:200,
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