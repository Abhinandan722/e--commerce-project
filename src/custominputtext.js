import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextInput} from 'react-native-gesture-handler';
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';

const Custominputtext = ({  icon,placeholder, type,value,onChangeText,  keyboardnumber,}) => {
  return (
    <GestureHandlerRootView>
      <View
        style={{
          borderWidth: 1,
          height: responsiveHeight(8),
          width: responsiveWidth(90),
          alignSelf: 'center',
          fontSize: responsiveFontSize(2),
          borderRadius: responsiveWidth(5),
          marginBottom: responsiveHeight(3),
          alignItems: 'center',
          flexDirection: 'row',
          paddingVertical: responsiveHeight(1),
          paddingLeft: responsiveWidth(2),
        }}>
        <Image
          source={icon}
          style={{width: responsiveWidth(10), height: responsiveHeight(5)}}
        />
        <TextInput
          placeholder={placeholder}
          secureTextEntry={type ? true : false}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardnumber}
          style={{fontSize: responsiveFontSize(2.5)}}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default Custominputtext;

const styles = StyleSheet.create({});