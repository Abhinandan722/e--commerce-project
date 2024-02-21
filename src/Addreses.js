import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {FlatList, State, TouchableOpacity} from 'react-native-gesture-handler';
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAddress} from './screens/redux/Actions/Action';

const Addreses = () => {
  const navigation = useNavigation();

  const addresslist = useSelector(state => state.AddressRaducer);
  
  const dispatch = useDispatch();

  return (
    <GestureHandlerRootView>
      <View>
        {/* Other components */}
        <NativeViewGestureHandler>
          <View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 15,
              }}>
              <Text style={{fontSize: 25, fontWeight: '500', color: 'black'}}>
                Address
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('addressdetial')}
                style={{borderWidth: 1, padding: 7, borderRadius: 30}}>
                <Text>Add Address</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={addresslist}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.fletlistmainview}>
                    <View style={{width: '60%',}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          gap:6
                        }}>
                        <Text style={styles.mytext}>city :</Text>
                        <Text style={[styles.dynamictext,{maxWidth:170}]}>{item.city}</Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row', gap:6
                        }}>
                        <Text style={styles.mytext}>building:</Text>

                        <Text style={[styles.dynamictext,{maxWidth:170}]}>{item.bnum}</Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row', gap:6
                        }}>
                        <Text style={styles.mytext}>pincode :</Text>
                        <Text style={[styles.dynamictext,{maxWidth:170}]}>{item.pin}</Text>
                      </View>
                    </View>

                    <TouchableOpacity
                      onPress={() => {
                        dispatch(deleteAddress(index));
                      }}
                      style={{
                        borderWidth: 1,
                        padding: 2,
                        height: 30,
                        width: 90,
                        alignItems: 'center',
                        borderColor:'red'
                      }}>
                      <Text style={{fontSize:20}}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </NativeViewGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default Addreses;

const styles = StyleSheet.create({
  mytext: {justifyContent: 'flex-start', fontWeight: '800', fontSize: 20},

  dynamictext: {
    fontSize: 20,
  },
  fletlistmainview: {
    marginVertical: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
