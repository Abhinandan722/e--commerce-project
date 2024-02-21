import { StyleSheet,Text,View,Alert,Image,ActivityIndicator,TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// import Custominputtext from '/Grocerry/src/custominputtext';
import Custominputtext from '../custominputtext';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [bademail, SetBadEmail] = useState(false);
  const [badpassword, SetBadPassword] = useState(false);
  const [indicator, SetIndicator] = useState(false);

  const validation = () => {
    if (email == '') {
      SetBadEmail(true);
    } else {
      SetBadEmail(false);
      if (password == '') {
        SetBadPassword(true);
      }
       else {
        SetBadPassword(false);
        SetIndicator(true);
           getdata();
          }
    }
  };


  const getdata = async () => {
    const memail = await AsyncStorage.getItem('EMAIL');
    const mpassword = await AsyncStorage.getItem('PASSWORD');
    if (memail == email && mpassword == password) {
      navigation.navigate('home');
      SetIndicator(false);
    } else {
      Alert.alert('wrong email or password');
      SetIndicator(false);
    }
    console.log(memail, mpassword, email, password);
  };

  return (
    <View style={{marginHorizontal: responsiveWidth(5)}}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          width: responsiveWidth(20),
          height: responsiveWidth(20),
          resizeMode: 'contain',
          alignSelf: 'center',
          borderRadius: responsiveWidth(10),
          marginTop: responsiveHeight(5),
        }}
      />

      <Text style={mystyle.logintext}> Login </Text>

      <View style={mystyle.form}>
        <Custominputtext
          placeholder={'enter your email'}
          icon={require('../assets/images/mail.png')}
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
              Log in 
            </Text>
          </TouchableOpacity>
      
      <Text style={{alignSelf: 'center'}}>
        ____________________OR____________________
      </Text>
      <View style={mystyle.lastview}>
        <Text
          style={{fontWeight: '700', fontSize: responsiveFontSize(3)}}
          onPress={() => navigation.navigate('signup')}>
          Create New Account ?
        </Text>
      </View>


      {/* this is activity indicater for cick on log in button and load */}
      <View
        style={{
          alignSelf: 'center',
          position: 'absolute',
          top: responsiveHeight(50),
        }}>
        <ActivityIndicator animating={indicator} size={100} />
      </View>

    </View>
  );
};

export default Login;

const mystyle = StyleSheet.create({
  logintext: {
    fontSize: responsiveFontSize(4),

    fontWeight: '500',
    color: 'black',
    paddingVertical: responsiveHeight(4),
    alignSelf: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
  lastview: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
