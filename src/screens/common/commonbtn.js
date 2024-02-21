import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React ,{useReducer}from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Commonbtn = ({onPress, title, bkcolor, textcolor,}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      // disabled={disabled}
      style={{
        backgroundColor: bkcolor,
        height: responsiveHeight(7),
        width: responsiveWidth(90),
        borderRadius: responsiveWidth(5),
        marginBottom: responsiveHeight(0),
      }}>
      <Text
        style={{
          color: textcolor,
          fontSize: responsiveFontSize(3),
          alignSelf: 'center',
          justifyContent: 'center',
          paddingTop: responsiveHeight(1),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Commonbtn;

const styles = StyleSheet.create({});