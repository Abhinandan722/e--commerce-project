import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splace from './src/screens/Splace';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Homee from './src/screens/Homee';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './src/screens/redux/store/Store';
import Addreses from './src/Addreses';
import Order from './src/screens/bottomsrc/Order';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (


<Provider store={store}>
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          options={{headerShown:false}}
          name="splace" component={Splace} />
          <Stack.Screen
            options={{headerShown: false}}
            name="home"
            component={Homee}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="signup"
            component={Signup}
          />
             <Stack.Screen
            options={{headerShown:true}}
            name="add"
            component={Addreses}
          />
            <Stack.Screen
            options={{headerShown:true}}
            name="order"
            component={Order}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </Provider>

    
  );
};

export default App;

const styles = StyleSheet.create({});
