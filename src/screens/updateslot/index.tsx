import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View, BackHandler, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getAuth, signOut } from "firebase/auth";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { child, getDatabase, onValue, ref, set, update ,} from 'firebase/database';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker';
import { TimePicker } from 'react-native-simple-time-picker';
import { AsyncStorage } from 'react-native';
import { ScrollViewVertical } from '../../componentes/slots/scrollviewvertical';



export interface updateSlotProps {
  route:any;
}
//LOGIN
export function UpdateSlot (props: updateSlotProps) {
    
  const {slot} = props.route.params;
  const {teste} = props.route.params;
  const auth = getAuth()
  const usuarioID = auth.currentUser.uid;
  const database = getDatabase(); 
  const nav = useNavigation();
  const [date, setDate] = useState(new Date().getDate());
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [horario,setHorario] = useState('00:00');
  const [alarme,setAlarme] = useState([]);

  
  

  const handleChange = (value: { hours: number, minutes: number }) => {

    setHours(value.hours);
    setMinutes(value.minutes);
    
  };
  const handleReset = () => {
    setHours(0);
    setMinutes(0);
  };

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
  const AutoAtt = async () => {  
    //Tratando String hora e minuto para fazer a String Horario 00:00
    
    console.log(horario)

  }

  React.useEffect(() => {
    if (String(hours).length == 1){
      var newHours = ('0' + String(hours))
    }
    else{
      var newHours = (String(hours))
    }
    if (String(minutes).length == 1){
      var newMinutes = ('0' + String(minutes))
    }
    else{
      var newMinutes = (String(minutes))
    }
    const novaHora = newHours + ':' + newMinutes;
    setHorario(novaHora)
    setAlarme([date,novaHora,dadosMedicamento])
  }, [hours, date, minutes, dadosMedicamento])

  React.useEffect(() => {
    if (slot.status == 'livre'){
      const b = parseInt(slot.idSlot)
      set(ref(database, '/comunicacao/x'), {
        x: b,
      });
      
    }

  }, [])

  React.useEffect(() => {
    if (slot.status == 'ocupado'){
      setDate(slot.data)
      var horaSepara = slot.hora
      horaSepara = horaSepara.split(':')
      setHours(Number(horaSepara[0]))
      setMinutes(Number(horaSepara[1]))
      setdadosMedicamento(slot.medicamentos)
      

      
      
    }

  }, [])

  React.useEffect(() => {
    const backAction = () => {
      console.log('ssss')
      set(ref(database, '/comunicacao/x'), {
        x: 0,
      }); 
      nav.goBack()
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",      
      backAction
    );

    return () => backHandler.remove();
  }, []);

  

  
  const Save = async () => {    

    

    set(ref(database, '/comunicacao/x'), {
      x: 0,
    });
    const slotPosicao = parseInt(slot.idSlot) - 1
    console.log(slot.medicamentos)
    update(ref(database, `dispositivos/${usuarioID}/${teste}/slots/${slotPosicao}`),{
      status: 'ocupado',
      data: date,
      medicamentos: dadosMedicamento,
      hora: horario
    });
    
    nav.navigate('Tela-Home')    
  }

  const adiantarMedicamento = async () => {
    Alert.alert('Adiantar Medicamento', 'Deseja realmente adiantar o medicamento?', [
      {text:'Cancelar'},
      {text: 'Confirmar', onPress: async () => {
        // console.log(dispositivo)
        console.log("Adiantando medicação")
        // aqui \/ eu vou mudar a váriavel de comunicação baseado no id do slot + 40 
        const a = (parseInt(slot.idSlot) + 40)
        set(ref(database, '/comunicacao/x'), {
          x: a,
        });
        console.log('Aguardando Caneco ser removido')
        await setTimeout(() => {
          console.log('Caneco removido, mudando variável para 0')
          set(ref(database, '/comunicacao/x'), {
            x: 0,
          });
        }, 15000);        
        const slotPosicao = parseInt(slot.idSlot) - 1
        update(ref(database, `dispositivos/${usuarioID}/${teste}/slots/${slotPosicao}`),{
          status: 'livre',
          data: '',
          hora:'',
          medicamentos:[]
        });
        nav.navigate('Tela-Home')
        
      }}
    ])
  }

    return (
    
    <View style={styles.background}>
      <View style={styles.head1}>
      <Text style={{textAlign: 'center',fontSize: 20,fontWeight: 'bold',color: '#DEDBDB',width:'100%'}}>{slot.nome}</Text>
      {slot.status == 'ocupado' && (
              <TouchableOpacity style={{marginTop:3,marginLeft:10} } onPress={adiantarMedicamento} >
              <FontAwesome name="trash-o" size={24} color="white"/>
              </TouchableOpacity>

              
      )}

      </View>
      <View style={styles.head}>
        <View style={styles.divisor1}>
        <Text style={{textAlign: 'center',fontSize: 14,fontWeight: 'bold',color: '#DEDBDB',}}>Selecione a Hora</Text>
        <TimePicker 
          style={styles.datePickerStyle}
          value={{ hours, minutes }} 
          onChange={handleChange} 
          />
        <Text style={{textAlign: 'center',fontSize: 14,fontWeight: 'bold',color: '#DEDBDB',}}>Selecione a Data</Text>

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
      {slot.status == 'ocupado' && (
        <FlatList
        data={slot.medicamentos
        }
        renderItem={({item}) => <Text style={{fontSize:20, fontWeight: 'bold',color: '#DEDBDB', marginBottom:15, }}>{item}</Text>}
      />
      )}
      {slot.status == 'livre' && (
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
      )}
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


    divisor1:{
      flex: 0,
      width: '80%',
      height:'100%',
      alignItems: 'center',
    },


    head:{
      alignItems:'center',
      justifyContent:'center',
      width: '100%',
      height: 160,
      marginTop:30,
      flexDirection: 'row',
    },

    datePickerStyle: {
      width: '100%',      
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

  export default UpdateSlot;
  

