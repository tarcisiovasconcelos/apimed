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
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




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
    {label: 'Paracetamol', value: 'Paracetamol'},
    {label: 'Medicamento 01', value: 'Medicamento 01'},
    {label: 'Medicamento 02', value: 'Medicamento 02'},
    {label: 'Medicamento 03', value: 'Medicamento 03'},
    {label: 'Medicamento 04', value: 'Medicamento 04'},
    {label: 'Medicamento 05', value: 'Medicamento 05'},
    {label: 'Medicamento 06', value: 'Medicamento 06'},
    {label: 'Medicamento 07', value: 'Medicamento 07'},
    {label: 'Medicamento 08', value: 'Medicamento 08'},
    {label: 'Medicamento 09', value: 'Medicamento 09'},
    {label: 'Medicamento 10', value: 'Medicamento 10'},
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

  
  const backAction = () => {
    console.log('ssss')
    set(ref(database, '/comunicacao/x'), {
      x: 0,
    }); 
    nav.goBack()
    return true;
  };
  
  const Save = async () => {    

    

    set(ref(database, '/comunicacao/x'), {
      x: 0,
    });
    const slotPosicao = parseInt(slot.idSlot) - 1
    console.log(slot.medicamentos)
    {slot.status == 'livre' &&(
      update(ref(database, `dispositivos/${usuarioID}/${teste}/slots/${slotPosicao}`),{
        status: 'ocupado',
        data: date,
        medicamentos: dadosMedicamento,
        hora: horario
      })      
      
    )}
    {slot.status == 'ocupado' &&(
      update(ref(database, `dispositivos/${usuarioID}/${teste}/slots/${slotPosicao}`),{
        data: date,
        hora: horario
      })
    )}
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
      <View style={styles.icons}>
      <TouchableOpacity style={{marginTop:100}} onPress={backAction}>
      <Ionicons name="arrow-back" size={35} color="white" />
      </TouchableOpacity>
      {slot.status == 'ocupado' && (
              <TouchableOpacity style={{marginTop:100,marginRight:0}} onPress={adiantarMedicamento} >
                <MaterialIcons name="more-time" size={35} color="white" />
              </TouchableOpacity>              
      )}

      </View>  
      <View style={styles.head1}>
      <Text style={{textAlign: 'center',fontSize: 20,fontWeight: 'bold',color: '#DEDBDB',width:'100%'}}>{slot.nome}</Text>
      </View>

      <View style={styles.head}>
        <View style={styles.divisor1}>
        <Text style={{textAlign: 'center',fontSize: 14,fontWeight: 'bold',color: '#DEDBDB',}}>Defina a Hora</Text>
        <View style={{width:'95%',height:40,backgroundColor:'#4663AE'}}>
        <TimePicker 
          value={{ hours, minutes }} 
          onChange={handleChange} 
          hoursUnit='H'
          zeroPadding
          minutesUnit="M"
        />
        </View>
        <Text style={{textAlign: 'center',fontSize: 14,fontWeight: 'bold',color: '#DEDBDB',}}>Defina a Data</Text>
        <View style={{width:'95%',backgroundColor:'#4663AE'}}>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="Selecione a data"
          format="DD-MM-YYYY"
          fontWeight='bold'
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          iconSource= {null}
          customStyles={{            
            dateInput: {
              marginLeft: 26, 
              borderColor:'transparent',
              backgroundColor:'#4663AE',
            },

          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        </View>
        </View>
        <View style={{flex:0,width:'10%',height:'100%'}}>
          <AntDesign name="clockcircleo" style={{marginTop:20}} size={35} color="white" />
          <AntDesign name="calendar" style={{marginTop:20}} size={35} color="white" />
          </View>       	
      </View>
      <Text style={{textAlign: 'center',fontSize: 14,fontWeight: 'bold',color: '#DEDBDB'}}>Medicamentos</Text>
      <View style={styles.container}>
      <View style={{
      flex: 1,
      paddingHorizontal: 5,
      width:'100%'

      }}>
      {slot.status == 'ocupado' && (
        <FlatList
        style={{width:'100%',marginTop:10,marginLeft:10,backgroundColor:'transparent'}}
        data={slot.medicamentos
        }
        renderItem={({item}) => 
        <Text style={{fontSize:20,backgroundColor:'#3556AA', fontWeight: 'bold',color: '#DEDBDB',width:'80%', marginBottom:10,textAlign:'left'}}>
          {item}</Text>}
      />
      )}
      {slot.status == 'livre' && (
      <DropDownPicker style={{marginTop:10,minHeight:30, backgroundColor:'#4663AE',borderColor:'white', borderWidth:0.1, borderRadius:0,maxHeight:'100%'}}
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
          backgroundColor: "#4663AE",
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
          borderColor:'white',
          borderWidth: 0.8
        }}
        badgeColors="#3556AA"
        badgeTextStyle={{
          color:'white'
        }}

        badgeDotColors='transparent'
        badgeDotStyle={{borderColor:'white',borderWidth:1}}
      />
      )}
      </View>             
      </View>
      <Button title="Salvar" onPress={Save} titleStyle={{color:'#3556AA'}} buttonStyle={styles.btn}></Button>              
      


    </View>
      
        
    );
  }
  
  const styles = StyleSheet.create({

    background: {
      flex: 0,
      backgroundColor: '#3556AA',
      alignItems: 'center',
      width: '100%',
      height: '100%',      
    },

    icons:{
      flex:0,
      flexDirection:'row',
      width:'90%',
      height:'20%',
      justifyContent:'space-between'
    },



    divisor1:{
      flex: 0,
      width: '50%',
      height:'100%',
      alignItems: 'center',
    },


    head:{
      alignItems:'center',
      justifyContent:'center',
      width: '100%',
      height:'20%',
      flexDirection: 'row',
    },

    datePickerStyle: {
      width: '100%',    
      fontWeight:'bold',  
    },

    head1:{
      alignItems:'flex-start',
      width: '70%',
      height:'5%',
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
      height: '40%',
      alignItems: 'center',
      backgroundColor: '#4663AE',
      borderRadius: 15,
      borderWidth: 0.8,
      borderColor: 'transparent'
    },


    btn:{
      borderRadius: 5,
      backgroundColor: '#9FBAFF',
      marginTop:10,
      width:150
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
  

