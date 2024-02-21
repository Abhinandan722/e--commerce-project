import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{
        height:60,
        width:'100%',
        backgroundColor:'white',
        justifyContent:'space-between',alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:20,
        elevation:5
      }}> 
         <Text style={{fontSize:23,fontWeight:'500',color:'black'}}> GroceryApp</Text>
         <Text style={{fontSize:17,fontWeight:'400'}} > mode</Text>

      </View>
  )
}

export default Header

const styles = StyleSheet.create({})