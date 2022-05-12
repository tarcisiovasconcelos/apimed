import { ImageBackground, StyleSheet, Image, View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export interface HomeProps {
}
export function Home(props: HomeProps) {

  const nav = useNavigation();

  return (
    
    <ImageBackground  source={require('./../../assets/imgs/bg2.png')}
    style={styles.background}>

      <View style={styles.cabecalho}>

      </View>

      <View style={styles.container}>        
        <TouchableOpacity onPress={() => nav.navigate('Tela-Alarme')}> 
          <Image source={require('./../../assets/imgs/alarme.png')}
	        />
          <Text style={styles.text}> Alarme </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => nav.navigate('Tela-Medicamento')}>        
	        <Image source={require('./../../assets/imgs/medicamento.png')}
	        />
          <Text style={styles.text}> Medicamentos </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>        
        <TouchableOpacity onPress={() => nav.navigate('Tela-Notificacao')}> 
          <Image source={require('./../../assets/imgs/notificacoes.png')}
          />
          <Text style={styles.text}> Noificações </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => nav.navigate('Tela-Slot')}> 
          <Image source={require('./../../assets/imgs/slots.png')}
          />
          <Text style={styles.text}> Slots </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rodape}>

      </View>

    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  
  cabecalho: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 30,
     
  },
  
  container: {
    flex:2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 5,    
  },

  rodape:{
    flex:5,
  },

  background: {
    width: '100%',
    height: '100%',  
  },

  text:{
    textAlign:'center',
    fontSize: 10
  }

 

});
