import { StyleSheet,View,Image } from 'react-native'
import React ,{useEffect}from 'react'
import {useNavigation} from '@react-navigation/native';
import Login from './Login';

const Splace = () => {
    const navigation = useNavigation();
    useEffect(() => {
      setTimeout(() => {
        
        navigation.navigate('login');
      }, 3000);
    });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Image
      source={require('../assets/images/logo.png')}
      style={{height: 100, width: 100, borderRadius: 50}}
    />
  </View>
  )
}

export default Splace

const styles = StyleSheet.create({})