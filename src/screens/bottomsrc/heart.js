import {StyleSheet, Text, View, FlatList,Image} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Carditem from '../common/carditem';
import {removeFromcard, removeFromwishlist} from '../redux/Actions/Action';

const Heart = () => {
  const [cardlist, SetCardlist] = useState([]);
  const cardData = useSelector(state => state.Reducers2);
  const dispatch = useDispatch();
  console.log(cardData);
  return (
    <View style={{flex: 1, marginTop: 10}}>
   
      {cardData.length>0? <FlatList
        data={cardData}
        renderItem={({item, index}) => {
          return (
            <Carditem
              item={item}
              iswishlist={'hii'}
              removeFromwishlist={() => {
                dispatch(removeFromwishlist(index));
              }}
              // onremovecard={() => {
              //   dispatch(removeFromwishlist(index));
              // }}
            />
          );
        }}
      /> :  
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image
        source={require('../image/money.png')}
        style={{width: 300, height: 300}}
      />
     <Text> NO item added</Text>
    </View>}

    </View>
  );
};

export default Heart;

const styles = StyleSheet.create({});
