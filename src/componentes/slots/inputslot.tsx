import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

export interface InputRoundSlotProps {
    placeholder: string;
    onChangeText(texto: string): void ;
    onBlur?(error: any): void;
}

export function InputRoundSlot (props: InputRoundSlotProps) {
    return (
      <View style={styles.test}>
         <Input placeholder={props.placeholder}
          onBlur={props.onBlur} 
          inputStyle={{color:'#DEDBDB'}}
          placeholderTextColor="#DEDBDB"
          inputContainerStyle={styles.inputContainer}
          onChangeText={props.onChangeText}
        />
      </View>
    );
}

const styles = StyleSheet.create({

    test:{
      height:22,  

    },
    inputContainer: { 
        backgroundColor: '#0077B6',
        borderRadius: 15,
        borderWidth:2,
        width:250,
        height:20,
        
      }
    
});