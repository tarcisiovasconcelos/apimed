import React, { useState } from 'react';

import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';


export default function SelectMedicamento() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Dipirona', value: 'Dipirona'},
    {label: 'Buprofinule', value: 'x'},
    {label: 'medicamento', value: 'y'},




  ]);

  return (
    <View style={{
      backgroundColor: '#0077B6',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: 5,
    }}>
      <DropDownPicker style={{marginTop:30,minHeight:30, backgroundColor:'#0077B6',borderColor:'white', borderWidth:0.1}}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        listMode="MODAL"
        searchable={true}
        modalContentContainerStyle={{
          backgroundColor: "#0077B6",
        }}
        
        placeholder="Selecione os medicamentos"
        placeholderStyle={{
        color: "white",
      
        fontWeight: "bold"
        }}

        multiple={true}
        mode="BADGE"
        badgeStyle={{
          backgroundColor:'white',
          borderColor:'white',
          borderWidth: 0.8
        }}
        badgeColors="#00B4D8"
        badgeTextStyle={{
          color:'white'
        }}
        badgeDotColors='#0077B6'
      />
    </View>
  );
}

