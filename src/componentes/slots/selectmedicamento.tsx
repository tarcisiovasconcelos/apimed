import React, { useState } from 'react';

import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';





export default function SelectMedicamento() {


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [dadosMedicamento,setdadosMedicamento] = useState([])
  const [items, setItems] = useState([
    {label: 'Dipirona', value: 'Dipirona'},
    {label: 'Buprofinule', value: 'x'},
    {label: 'medicamento', value: 'y'},
    {label: 'medicamento', value: 'y1'},
    {label: 'medicamento', value: 'y2'},
    {label: 'medicamento', value: 'y3'},
    {label: 'medicamento', value: 'y4'},
    {label: 'medicamento', value: 'y5'},
    {label: 'medicamento', value: 'y6'},
    {label: 'medicamento', value: 'y7'},
    {label: 'medicamento', value: 'y8'},
    {label: 'medicamento', value: 'y9'},
  ]);

  const teste = async () => {   
    console.log('asds')

  }

  
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: 5,

    }}>
      <DropDownPicker style={{marginTop:10,minHeight:30, backgroundColor:'#0077B6',borderColor:'white', borderWidth:0.1, borderRadius:0,maxHeight:'100%'}}
        open={open}
        value={value}
        items={items}
        onClose={() => 
          setdadosMedicamento(value)
          
        }
        onChangeValue={(value) => {
          console.log(value);
        }        
        }     
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        listMode="MODAL"
        searchable={true}
        max={7}
        modalContentContainerStyle={{
          backgroundColor: "#0077B6",
        }}
        
        placeholder="Selecione os medicamentos"
        placeholderStyle={{
        color: "white",      
        fontWeight: "bold"
        }}  
        extendableBadgeContainer={true}
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
