import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Profile = () => {
  const navigation = useNavigation();
  const [namee, setNamee] = useState('');
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    setNamee(await AsyncStorage.getItem('NAME'));
  };


  return (
    <View style={{ flex: 1 }}>

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 15,
        }}>
        <Text style={{ fontSize: 25, fontWeight: '500', color: 'black' }}>
          Profile
        </Text>
        <Image
          source={require('../image/settings.png')}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <Image
        source={require('../image/profile2.png')}
        style={{
          width: 90,
          height: 90,
          alignSelf: 'center',
          marginTop: 30,
          marginBottom: 20,
        }}
      />
      <Text style={{ alignSelf: 'center', marginVertical: 20, fontSize: 25 }}>
        {namee}
      </Text>
      <TouchableOpacity
      onPress={()=>navigation.navigate("address")}
        style={{
          borderBottomWidth: 1,
          borderColor: '#8e8e8e',
          height: 50,
          backgroundColor: 'white',
          width: '90%',
          alignSelf: 'center',
          marginVertical: 10,
        }}>
        <Text style={{ fontSize: 25 }}>My Address</Text>
      </TouchableOpacity>

      <TouchableOpacity
        
        style={{
          borderBottomWidth: 1,
          borderColor: '#8e8e8e',
          height: 50,
          backgroundColor: 'white',
          width: '90%',
          alignSelf: 'center',
          marginVertical: 10,
        }}>
        <Text style={{ fontSize: 25 }}>My Order</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          borderBottomWidth: 1,
          borderColor: '#8e8e8e',
          height: 50,
          backgroundColor: 'white',
          width: '90%',
          alignSelf: 'center',
          marginVertical: 10,
        }}>
        <Text style={{ fontSize: 25 }}>Offers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
