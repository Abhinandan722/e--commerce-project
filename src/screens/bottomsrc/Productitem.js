import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Productitem = ({item, onAddTocard, onAddTowishlist}) => {
  return (
    <TouchableOpacity
      style={{
        height: 200,
        width: 200,
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
        </View>
        
        <TouchableOpacity
          onPress={() => {
            onAddTocard(item);
          }}
          style={{
            justifyContent: 'flex-end',
            alignSelf: 'flex-end',
            position: 'absolute',
            right: 20,
            padding: 5,
            borderRadius: 50,
            backgroundColor: 'green',
          }}>
          <Text style={{color: 'white'}}>Add to Card</Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity
        onPress={() => {
          onAddTowishlist(item);
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
          source={require('../image/heart.png')}
          style={{width: 25, height: 25, alignSelf: 'center'}}
        />
        
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Productitem;

const styles = StyleSheet.create({});
