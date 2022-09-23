import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getAuth, signOut } from "firebase/auth";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { child, getDatabase, ref, set } from 'firebase/database';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker';



export interface updateSlotProps {
  route:any;
}
//LOGIN
export function UpdateSlot (props: updateSlotProps) {
    
  const nav = useNavigation();
  const [date, setDate] = useState('09-10-2020');
  const auth = getAuth()
  const database = getDatabase();
  const usuarioID = auth.currentUser.uid;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [dadosMedicamento,setdadosMedicamento] = useState([])
  const [items, setItems] = useState([
    {label: 'Dipirona', value: 'Dipirona'},
    {label: 'Buprofinule', value: 'Buprofinule'},
    {label: 'medicamento1', value: 'medicamento1'},
    {label: 'medicamento2', value: 'medicamento2'},
    {label: 'medicamento3', value: 'medicamento3'},
    {label: 'medicamento4', value: 'medicamento4'},
    {label: 'medicamento5', value: 'medicamento5'},
    {label: 'medicamento6', value: 'medicamento6'},
    {label: 'medicamento7', value: 'medicamento7'},
    {label: 'medicamento8', value: 'medicamento8'},
    {label: 'medicamento9', value: 'medicamento9'},
    {label: 'medicamento10', value: 'medicamento10'},
  ]);

  

//checando se ele esta on ou off
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //online
    //console.log( user );
  } else {
    //offline
  }
  });

  
  const Save = async () => {  
    
    console.log(date)
    console.log(dadosMedicamento)

  }

    return (
    
    <View style={styles.background}>
      <View style={styles.head1}>
      <Text style={{textAlign: 'center',fontSize: 20,fontWeight: 'bold',color: '#DEDBDB',width:'100%'}}>SLOT 01</Text>
      <TouchableOpacity style={{marginTop:3,marginLeft:10}}>
      <FontAwesome name="trash-o" size={24} color="white" />
      </TouchableOpacity>
      </View>
      <View style={styles.head}>
        <View style={styles.divisor}>
          <Text style={styles.title2}>Alarme:</Text>
          <Text style={styles.title2}>Data:</Text>          
        </View>
        <View style={styles.divisor1}>
        <Text style={styles.title2}>Selecione a Hora</Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="Selecione a data"
          format="DD-MM-YYYY"
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        </View>       	
      </View>
      <Text style={{textAlign: 'center',fontSize: 14,fontWeight: 'bold',color: '#DEDBDB'}}>Medicamentos</Text>
      <View style={styles.container}>
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
          flex:0,
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
      </View>
      <Button title="Salvar" onPress={Save} buttonStyle={styles.btn}></Button>


    </View>
      
        
    );
  }
  
  const styles = StyleSheet.create({

    background: {
      flex: 0,
      backgroundColor: '#0077B6',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      borderRadius: 15
      
    },

    divisor:{
      flex: 0,
      width: '30%',
      alignItems: 'flex-end'

    },

    divisor1:{
      flex: 0,
      width: '70%',
      alignItems: 'flex-start',
    },


    head:{
      alignItems:'flex-start',
      width: '70%',
      height: 80,
      marginTop:30,
      flexDirection: 'row',
    },

    datePickerStyle: {
      width: 200,
    },

    head1:{
      alignItems:'flex-start',
      width: '70%',
      marginTop:'20%',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  
    logo:{
      width:245,
      height:140,    
    },

    container:{
      flex:0,
      width: '80%',
      height: '50%',
      alignItems: 'center',
      backgroundColor: '#0077B6',
      borderRadius: 15,
      borderWidth: 0.8,
      borderColor: 'white'
    },

    btn:{
      flexDirection:'column',
      borderRadius: 15,
      backgroundColor: '#00B4D8',
      width: 165,
      borderColor: '#DEDBDB',
      borderRightWidth: 5,
      borderLeftWidth: 5, 
    },

    rodape:{
      flex:0,
      width: 315,
      height: 50,
      alignItems: 'center',
      marginTop: 30
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
      marginBottom:15,
      marginLeft: 5,

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
  

