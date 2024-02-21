import {Text,View,Image} from 'react-native';
import React, {useState} from 'react';

import Main from './bottomsrc/main';
import Card from './bottomsrc/card';
import Heart from './bottomsrc/heart';
import User from './bottomsrc/user';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const Homee = () => {
  const data=useSelector(data=>data) // for to get data from redux
  
  return (
    <View style={{flex: 1}}>
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen
            name="main"
            component={Main}
            options={{
              headerShown: false,

              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <View>
                  <Image
                    source={require('../assets/images/home.png')}
                    resizeMode="contain"
                    style={{
                      width: focused ? 30 : 25,
                      height: focused ? 30 : 25,
                      tintColor: focused ? 'black' : 'grey',
                    }}
                  />
                </View>
              ),
            }}
          />
      
          <Tab.Screen
            name="card"
            component={Card}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    width: focused ? 46 : 45,
                    height: focused ? 46 : 45,
                    backgroundColor: focused ? 'green' : 'black',
                    borderRadius: focused ? 25 : 22.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../assets/images/card.png')}
                    resizeMode="contain"
                    style={{
                      width: '80%',
                      height: '80%',
                      tintColor: 'white',
                    }}
                  />
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 10,
                      backgroundColor: 'red',
                      position: 'absolute',
                      left: 25,
                      top: 2,justifyContent:'center',
                      alignItems:'center'
                    }}>
                    <Text style={{color:'white'}}>{data.Reducers.length}</Text>
                  </View>
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="heart"
            component={Heart}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <View>
                  <Image
                    source={require('../assets/images/heart.png')}
                    resizeMode="contain"
                    style={{
                      width: focused ? 30 : 25,
                      height: focused ? 30 : 25,
                      tintColor: focused ? 'black' : 'grey',
                    }}
                  />
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 10,
                      backgroundColor: 'red',
                      position: 'absolute',
                      left: 20,
                      top: -5,justifyContent:'center',
                      alignItems:'center'
                    }}>
                    <Text style={{color:'white',alignSelf:'center'}}>{data.Reducers2.length}</Text>
                  </View>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="user"
            component={User}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <View>
                  <Image
                    source={require('../assets/images/user.png')}
                    resizeMode="contain"
                    style={{
                      width: focused ? 30 : 25,
                      height: focused ? 30 : 25,
                      tintColor: focused ? 'black' : 'grey',
                    }}
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Homee;
