import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import React from 'react';

export interface AlarmeProps {
}
export function Alarme(props: AlarmeProps) {
  return (
    
    <ImageBackground  source={require('./../../assets/imgs/bg2.png')}
    style={styles.background}>
        
        <View style={styles.cabecalho}>

        </View>

        <View style={styles.container}>
        <Text>Alarme Page</Text>
        </View>

        <View style={styles.rodape}>
            
        </View>
        
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',  
      },

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

});
