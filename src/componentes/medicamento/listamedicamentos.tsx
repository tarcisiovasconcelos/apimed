import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListaMedicamentos = ({ data }) => {
  return (
      <View style={styles.itemInfo}>
        <Text style={styles.title1}>{data.nome}</Text>
        <Text style={styles.title2}>Descrição</Text>
        <Text style={styles.text1}>{data.descricao}</Text>
        <Text style={styles.title2}>Efeitos colaterais</Text>
        <Text style={styles.text1}>{data.efeitos}</Text>
        <Text style={styles.title2}>Interação medicamentosa</Text>
        <Text style={styles.text1}>{data.interacao}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  

  itemInfo: {
    alignItems:'flex-start',
    width:'100%',
    marginVertical:15,
    borderWidth:1,
    padding:20,
    borderRadius:5,
    borderColor:'white'
  },

  title1:{
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',

  },

  title2:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',

  },

  text1:{
    textAlign: 'left',
    fontSize: 12,
    color: 'white',
  },

  text2:{
    textAlign: 'center',
    fontSize: 10,
    color: '#DEDBDB',

  },
});

export default ListaMedicamentos;
