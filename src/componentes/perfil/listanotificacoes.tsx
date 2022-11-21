import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListaNotify = ({ data }) => {
  return (
      <View style={styles.itemInfo}>
        <Text style={styles.title1}>{data}</Text>

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
    color: 'black',

  },

  title2:{
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',

  },

  text1:{
    textAlign: 'left',
    fontSize: 10,
    color: 'black',
  },

  text2:{
    textAlign: 'center',
    fontSize: 10,
    color: '#DEDBDB',

  },
});

export default ListaNotify;
