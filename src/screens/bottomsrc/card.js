import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Carditem from '../common/carditem';
import {addItemtowishlist, removeFromcard} from '../redux/Actions/Action';
import Commonbtn from '../common/commonbtn';
import RazorpayCheckout from 'react-native-razorpay';

const Card = () => {
  const [cardlist, SetCardlist] = useState([]);
  const cardData = useSelector(state => state.Reducers);
  const dispatch = useDispatch();
  console.log("tis is add to card wali screen",cardData);

  
  return (
    <View style={{flex: 1}}>
      {cardData.length > 0 ? (
        <FlatList
          data={cardData}
          renderItem={({item, index}) => {
            return (
              <Carditem
                
                item={item}
                onremovecard={() => {
                  dispatch(removeFromcard(index));
                }}
              />
            );
          }}
        />
        
      ) : (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        
          <Image
            source={require('../image/money.png')}
            style={{width: 300, height: 300}}
          />
         <Text> NO item added</Text>
        </View>
      )}
      {cardData.length>0? (
       <View style={{margin:5}}>

           <Commonbtn
         
         bkcolor={ 'green'}
         textcolor={'white'}
         title={'Check out'}
        //  onPress={() => rezorpay()}
       
       /> 



       </View>)
                 :null}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
