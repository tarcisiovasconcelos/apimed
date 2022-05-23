import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const ListItem = ({ data }) => {
  return (
      <View style={styles.itemInfo}>
        <Text style={styles.title1}>{data.name}</Text>
        <Text style={styles.title2}>{data.descricao}</Text>
        <Text style={styles.text1}>{data.textdesc}</Text>
        <Text style={styles.title2}>{data.efeitos}</Text>
        <Text style={styles.text1}>{data.textefec}</Text>
        <Text style={styles.title2}>{data.interacao}</Text>
        <Text style={styles.text1}>{data.textinte}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    paddingTop: 15,
    paddingBottom: 15,
  },

  itemInfo: {
    alignItems:'flex-start',
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

export default ListItem;
