import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Carditem = ({
  item,
  onremovecard,
  iswishlist,
  removeFromwishlist,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 200,
        width: '90%',
        elevation: 10,
        shadowColor: 'black',

        borderRadius: 20,
        marginLeft: 20,
        backgroundColor: 'white',
        marginBottom: 20,
      }}>
      <Image source={item.image} style={{height: '60%', width: '100%'}} />
      <View style={{flexDirection: 'row', padding: 10}}>
        <View style={{justifyContent: 'space-around', gap: 10}}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
            {item.name}
          </Text>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
            {'₹' + item.price}
          </Text>
          {iswishlist ? null : (
            <TouchableOpacity
              onPress={() => {
                onremovecard(item);
              }}
              style={{
                justifyContent: 'flex-end',
                alignSelf: 'flex-end',
                position: 'absolute',
                left: 200,
                padding: 5,

                borderRadius: 50,
                backgroundColor: 'red',
                width: 120,
              }}>
              <Text style={{color: 'white'}}>Remove to Card</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {iswishlist ? (
        <TouchableOpacity
          onPress={() => {
            removeFromwishlist();
          }}
          style={{
            justifyContent: 'center',
            alignSelf: 'flex-start',
            position: 'absolute',
            right: 5,
            padding: 0,
            borderRadius: 20,
            height: 40,
            width: 40,
            backgroundColor: 'white',
            marginTop: 10,
          }}>
           <Image
            source={require('../image/heartred.png')}
            style={{width: 25, height: 25, alignSelf: 'center'}}
          /> 
        </TouchableOpacity>
      ) :null}
    </TouchableOpacity>
  );
};

export default Carditem;

const styles = StyleSheet.create({});
