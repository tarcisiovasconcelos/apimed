// Example of Searchable Dropdown / Picker in React Native
// https://aboutreact.com/example-of-searchable-dropdown-picker-in-react-native/

// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View , KeyboardAvoidingView} from 'react-native';

//import SearchableDropdown component
import SearchableDropdown from 'react-native-searchable-dropdown';


export interface SelectMedicamentoProps {
}

export function SelectMedicamento (props: SelectMedicamentoProps) {
//Item array for the dropdown
const items = [
  //name key is must.It is to show the text in front
  { id: 1, name: 'angellist' },
  { id: 2, name: 'codepen' },
  { id: 3, name: 'envelope' },
  { id: 4, name: 'etsy' },
  { id: 5, name: 'facebook' },
  { id: 6, name: 'foursquare' },
  { id: 7, name: 'github-alt' },
  { id: 8, name: 'github' },
  { id: 9, name: 'gitlab' },
  { id: 10, name: 'instagram' },
];

const addMed = async (item) => {    
    
  if (item.name == 'angellist'){
    return (
        <Text>Teste</Text>
    )
}

  }

  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.background} behavior="position">
        <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          //On text change listner on the searchable input
          onItemSelect={(item) => 
              console.log(item.name)
          }
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 0}}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 10,
            borderWidth: 0.8,
            borderColor: 'white',
            backgroundColor: '#00B4D8',
            color: 'white'
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#00B4D8',
            borderColor: 'white',
            borderWidth: 0.8,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: 'white',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '70%',
          }}
          items={items}
          //mapping of item array
          //default selected item index
          placeholder="Adicionar Medicamento"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
      </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
    
  );
};

export default SelectMedicamento;

const styles = StyleSheet.create({

  background: {
    flex: 0,
    width:'100%',
    minHeight: '80%'
    
  },

  container: {
    flex: 0,
    padding: 10,
    width: '100%',
    minHeight: '80%'
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },
});