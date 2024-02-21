import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import Custominputtext from './custominputtext';
import Commonbtn from './screens/common/commonbtn';
import { useDispatch } from 'react-redux';
import { addAddress } from './screens/redux/Actions/Action';

const Addresesdetial = () => {
  const navigation = useNavigation();
  const[city,setCity]=useState();
  const[bnum,setBNum]=useState();
  const[pin,setPin]=useState();
  const dispatch=useDispatch();
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity style={styles.mainview} onPress={()=> navigation.goBack()}>
        <Image
          source={require('./assets/images/back.png')}
          style={{width: 40, height: 40}}
        />
      </TouchableOpacity>

      <Custominputtext
            placeholder={'enter city name'}
            icon={require('./assets/images/buildings.png')}
            
             value={city}
            onChangeText={txt => {
              setCity(txt);
            }}
          />
             <Custominputtext
            placeholder={'enter  building name'}
            icon={require('./assets/images/building.png')}
            
             value={bnum}
            onChangeText={txt => {
              setBNum(txt);
            }}
          />
           <Custominputtext
            placeholder={'enter Pincode number'}
            icon={require('./assets/images/pin.png')}
            keyboardnumber={'phone-pad'}
             value={pin}
            onChangeText={txt => {
              setPin(txt);
            }}
          />
          <View style={{alignSelf:'center'}}>
          <Commonbtn
            bkcolor={'black'}
            textcolor={'white'}
            title={'Save'}
            onPress={() =>{
              if(city!=''&&bnum!='' &&pin!=''){

               dispatch(addAddress({city:city,bnum:bnum,pin:pin})
                )
                navigation.goBack('address')
              }
              
            }
          }
            
          /> 

          </View>

          
    </View>
  );
};

export default Addresesdetial;

const styles = StyleSheet.create({
  mainview: {
    borderWidth: 1,
    borderRadius: 50,
    width: 50,
    height: 50,
    margin: 20,
    alignItems: 'center',
  },
});
