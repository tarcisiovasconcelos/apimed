import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListaMedicamentos = ({ data }) => {
  return (
      <View style={styles.itemInfo}>
        <Text style={styles.title1}>{data.nome}</Text>
        <Text style={styles.title2}>Descrição:</Text>
        <Text style={styles.text1}>{data.descricao}</Text>
        <Text style={styles.title2}>Efeitos colaterais:</Text>
        <Text style={styles.text1}>{data.efeitos}</Text>
        <Text style={styles.title2}>Interação medicamentosa:</Text>
        <Text style={styles.text1}>{data.interacao}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  

  itemInfo: {
    alignItems:'flex-start',
    marginVertical:15
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
    textAlign: 'left',
    fontSize: 10,
    color: '#DEDBDB',
  },

  text2:{
    textAlign: 'center',
    fontSize: 10,
    color: '#DEDBDB',

  },
});

export default ListaMedicamentos;
