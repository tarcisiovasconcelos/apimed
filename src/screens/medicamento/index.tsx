import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TitleMedicamentos } from '../../componentes/medicamento/title';
import { ListaComBarra } from '../../componentes/medicamento/flatlistcompesquisa';


export interface MedicamentoProps {
}
//LOGIN
export function Medicamento (props: MedicamentoProps) {

    return (
    <SafeAreaView style={styles.background}>    
      <TitleMedicamentos/>
      <ListaComBarra/>

    </SafeAreaView>
      
        
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#0077B6',
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
  

