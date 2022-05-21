import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

export interface InputRoundProps {
    senha?: boolean;
    icone: string;
    placeholder: string;
    onChangeText(texto: string): void ;
    onBlur?(error: any): void;
}

export function InputRound (props: InputRoundProps) {
    return (
      <View>
         <Input placeholder={props.placeholder}
          leftIcon={{name:props.icone, color:"#DEDBDB"}}
          secureTextEntry={props.senha}
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
  inputContainer: { 
      backgroundColor: '#0077B6',
      marginBottom: -29,
      borderRadius: 15
    }
    
});