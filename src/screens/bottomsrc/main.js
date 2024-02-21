import {StyleSheet,Text,View,Image,FlatList,TouchableOpacity,ScrollView,} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Products} from '../../Product';
import Productitem from './Productitem';
import Header from '../common/header';
import {addItemtocard, addItemtowishlist} from '../redux/Actions/Action';
import {useDispatch, useSelector} from 'react-redux';
const Main = () => {
  const dispatch = useDispatch();
  const [categorylist, SetCategorylist] = useState([]);
  const [tshirt, SetTshirt] = useState([]);
  const [jeans, SetJeans] = useState([]);
  const [shoes, SetShoes] = useState([]);
  const [jacket, SetJacket] = useState([]);
  const [sliper, SetSliper] = useState([]);
  const [trousers, SetTrousers] = useState([]);
  useEffect(() => {
    let category = [];
    Products.category.map(item => {
      category.push(item);
    });
    SetCategorylist(category);
    SetTshirt(Products.category[0].data);
    SetJeans(Products.category[1].data);
    SetShoes(Products.category[2].data);
    SetJacket(Products.category[3].data);
    SetSliper(Products.category[4].data);
    SetTrousers(Products.category[5].data);
    console.log(JSON.stringify(Products.category[0]));
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header />

      <ScrollView style={{flex: 1}}>
        <View>
           <Image
            source={require('../image/bannerr.jpg')}
            style={{width: 400, height: 200}}
          /> 
          <View style={{marginTop: 40}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={categorylist}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      padding: 10,
                      borderWidth: 1,

                      borderRadius: 10,
                      marginLeft: 20,
                    }}>
                    <Text
                      style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
                      {item.category}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              margin: 20,
              fontWeight: '700',
              color: 'black',
            }}>
            New T Shert
          </Text>
          <View style={{marginTop: 20}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={tshirt}
              renderItem={({item}) => {
                return (
                  <Productitem
                    item={item}
                    onAddTowishlist={x => {
                      dispatch(addItemtowishlist(x));
                    }}
                    onAddTocard={x => {
                      dispatch(addItemtocard(item));
                    }}
                  />
                );
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 18,
              margin: 20,
              fontWeight: '700',
              color: 'black',
            }}>
            New Jeans
          </Text>
          <View style={{marginTop: 20}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={jeans}
              renderItem={({item}) => {
                return (
                  <Productitem
                    item={item}
                    onAddTowishlist={x => {
                      dispatch(addItemtowishlist(x));
                    }}
                    onAddTocard={x => {
                      dispatch(addItemtocard(item));
                    }}
                  />
                );
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 18,
              margin: 20,
              fontWeight: '700',
              color: 'black',
            }}>
            New Shoes
          </Text>
          <View style={{marginTop: 20}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={shoes}
              renderItem={({item, index}) => {
                return (
                  <Productitem
                    item={item}
                    onAddTowishlist={x => {
                      dispatch(addItemtowishlist(x));
                    }}
                    onAddTocard={x => {
                      dispatch(addItemtocard(item));
                    }}
                  />
                );
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 18,
              margin: 20,
              fontWeight: '700',
              color: 'black',
            }}>
            New Watch
          </Text>
          <View style={{marginTop: 20}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={jacket}
              renderItem={({item}) => {
                return (
                  <Productitem
                    item={item}
                    onAddTowishlist={x => {
                      dispatch(addItemtowishlist(x));
                    }}
                    onAddTocard={x => {
                      dispatch(addItemtocard(item));
                    }}
                  />
                );
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 18,
              margin: 20,
              fontWeight: '700',
              color: 'black',
            }}>
            New Sliper
          </Text>
          <View style={{marginTop: 20}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={sliper}
              renderItem={({item}) => {
                return (
                  <Productitem
                    item={item}
                    onAddTowishlist={x => {
                      dispatch(addItemtowishlist(x));
                    }}
                    onAddTocard={x => {
                      dispatch(addItemtocard(item));
                    }}
                  />
                );
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 18,
              margin: 20,
              fontWeight: '700',
              color: 'black',
            }}>
            New Sofas
          </Text>
          <View style={{marginTop: 20}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={trousers}
              renderItem={({item}) => {
                return (
                  <Productitem
                    item={item}
                    onAddTowishlist={x => {
                      dispatch(addItemtowishlist(x));
                    }}
                    onAddTocard={x => {
                      dispatch(addItemtocard(item));
                    }}
                  />
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
