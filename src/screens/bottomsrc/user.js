import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Addreses from '../../Addreses';
import Profile from './Profile';
import Addresesdetial from '../../Addresesdetial';

const User = () => {
 
  const Stack = createNativeStackNavigator();



  return (
 
 
           <View style={{ flex: 1 }}>
{/* ------------------------ */}

        <Stack.Navigator>
         
            <Stack.Screen
            options={{headerShown:false}}
            name="order"
            component={Profile}
          />
           <Stack.Screen
            options={{headerShown:false}}
            name="address"
            component={Addreses}
          />
           <Stack.Screen
            options={{headerShown:false}}
            name="addressdetial"
            component={Addresesdetial}
          />
        </Stack.Navigator>
       {/* </NavigationContainer> */}
      {/* -------------------------------- */}
     
    
    </View>

  );
};

export default User;

const styles = StyleSheet.create({});
