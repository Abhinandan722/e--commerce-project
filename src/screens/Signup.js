import {StyleSheet, Text, View,TouchableOpacity, Image,  ScrollView,} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Custominputtext from '../custominputtext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const navigation = useNavigation();
  const [email, SetEmail] = useState('');
  const [bademail, SetBadEmail] = useState(false);
  const [password, SetPassword] = useState('');
  const [badpassword, SetBadPassword] = useState(false);
  const [num, SetNum] = useState('');
  const [badnum, SetBadnum] = useState(false);
  const [name, SetName] = useState('');
  const [badname, SetBadName] = useState(false);

  const [disable, SetDisable] = useState(false);

  const validation = () => {
    SetDisable(true);
    if (name == '' || name.length >= 25) {
      SetBadName(true);
      SetDisable(false);
    } else {
      SetBadName(false);
      if (num == '' || num.length > 10) {
        SetBadnum(true);
        SetDisable(false);
      } else if (num.length < 10) {
        SetBadnum(true);
        SetDisable(false);
      } else {
        SetBadnum(false);
        if (email == '' || email.length >= 30) {
          SetBadEmail(true);
          SetDisable(false);
        } else {
          SetBadEmail(false);
          if (password == '' || password.length >= 30) {
            SetBadPassword(true);
            SetDisable(false);
          } else if (password.length < 8) {
            SetBadPassword(true);
            SetDisable(false);
          } else {
            SetBadPassword(false);
            savedata();
            console.log(name, num, email, password);
          }
        }
      }
    }
  };

  const savedata = async () => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('NUM', num);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('PASSWORD', password);
    navigation.goBack();
  };
  return (
    <ScrollView>
      <View style={{marginHorizontal: responsiveWidth(5)}}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            width: responsiveWidth(16),
            height: responsiveWidth(16),
            resizeMode: 'contain',
            alignSelf: 'center',
            borderRadius: responsiveWidth(8),
            marginTop: responsiveHeight(4),
          }}
        />

        <Text style={mystyle.logintext}> Create New Account </Text>

        <View style={mystyle.form}>
          <Custominputtext
            placeholder={'enter your name'}
            icon={require('../assets/images/phone.png')}
            value={name}
            onChangeText={txt => {
              SetName(txt);
            }}
          />
          {badname == true ? (
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
                color: 'red',
                marginBottom: responsiveHeight(2),
              }}>
              Please enter your name
            </Text>
          ) : null}
          <Custominputtext
            placeholder={'enter your number'}
            // icon={require('/Grocerry/src/assets/images/phone.png')}
            icon={require('../assets/images/phone.png')}
            keyboardnumber={'phone-pad'}
            value={num}
            onChangeText={txt => {
              SetNum(txt);
            }}
          />
          {badnum == true ? (
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
                color: 'red',
                marginBottom: responsiveHeight(2),
              }}>
              Please enter your number
            </Text>
          ) : null}
          <Custominputtext
            placeholder={'enter your email'}
          //  icon={require('/Grocerry/src/assets/images/mail.png')}
          icon={require('../assets/images/phone.png')}
            value={email}
            onChangeText={txt => {
              SetEmail(txt);
            }}
          />
          {bademail == true ? (
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
                color: 'red',
                marginBottom: responsiveHeight(2),
              }}>
              Please enter email id
            </Text>
          ) : null}
          <Custominputtext
            placeholder={'enter your password'}
            icon={require('../assets/images/password.png')}
            type={'password'}
            value={password}
            onChangeText={txt => {
              SetPassword(txt);
            }}
          />
          {badpassword == true ? (
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
                color: 'red',
                marginBottom: responsiveHeight(2),
              }}>
              Please enter password
            </Text>
          ) : null}
        </View>
        <View style={mystyle.btnview}>
          {/* <Commonbtn
            bkcolor={disable ? '8e8e8e' : 'black'}
            textcolor={'white'}
            title={'SIGN UP'}
            onPress={() => validation()}
            disabled={disable}
          /> */}
          <TouchableOpacity
            onPress={() => validation()}
           
            style={{
              backgroundColor: 'black',
              height: responsiveHeight(7),
              width: responsiveWidth(90),
              borderRadius: responsiveWidth(5),
              marginBottom: responsiveHeight(0),
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: responsiveFontSize(3),
                alignSelf: 'center',
                justifyContent: 'center',
                paddingTop: responsiveHeight(1),
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{alignSelf: 'center'}}>
          ____________________OR____________________
        </Text>
        <View style={mystyle.lastview}>
          <Text
            style={{fontWeight: '700', fontSize: responsiveFontSize(3)}}
            onPress={() => navigation.goBack()}>
            Already have Account ?
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const mystyle = StyleSheet.create({
  logintext: {
    fontSize: responsiveFontSize(3.5),

    fontWeight: '500',
    color: 'black',
    paddingVertical: responsiveHeight(2),
    alignSelf: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
  btnview: {
    paddingRight: 40,
    paddingVertical: 20,
  },
  lastview: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
