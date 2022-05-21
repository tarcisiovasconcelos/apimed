import * as React from 'react';
import { StyleSheet, View } from 'react-native';


export interface HomeProps {
}
//LOGIN
export function Home (props: HomeProps) {


    return (
    <View style={styles.background}>
      <View style={styles.head}>
	
      </View>

      <View style={styles.container}>        
    
      </View>
      <View style={styles.rodape}>

      </View>

    </View>
      
        
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#0077B6',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },

    head:{
      alignItems:'center',
      width: 315,
      height: 140,
      marginTop:50
    },
  
    logo:{
      width:245,
      height:140,    
    },

    container:{
      width: 315,
      height: 255,
      marginTop: 50,
      alignItems: 'center',
    },

    btn:{
      flexDirection:'column',
      borderRadius: 15,
      backgroundColor: '#00B4D8',
      width: 165,
      borderColor: '#DEDBDB',
      borderRightWidth: 5,
      borderLeftWidth: 5, 
    },

    rodape:{
      flex:1,
      width: 315,
      height: 50,
      alignItems: 'center',

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
  

