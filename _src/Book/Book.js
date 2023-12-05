import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon} from '@rneui/themed';
import Pagination from '../Pagination';
import { useRoute } from '@react-navigation/native';
export default function Book({navigation}) {
  const route = useRoute();
  const {uid,chapter} = route.params
  useEffect(()=>{
    console.log(uid,'ss');
  console.log(chapter,'ss');
  if(chapter){
    navigation.navigate('Reading',{uid:uid,chapters:chapter-1})
  }
  })

 

  var indexpage = -1;
  var Data = [];
  const img =
    'data:image/jpeg;base64,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';

  const data = [
    {
      id: 1,
      name: 'The Hobbit1',
      comment: 'J.R.R Tolkien',
    },
    {
      id: 2,
      name: 'The cubit',
      comment: 'J.R.R Tolkien',
    },
    {
      id: 3,
      name: 'The ngubit',
      comment: 'J.R.R Tolkien',
    },
    {
      id: 4,
      name: 'The vubit',
      comment: 'J.R.R Tolkien',
    },
    {
      id: 5,
      name: 'The tibit',
      comment: 'J.R.R Tolkien',
    },
    // {
    //   id:6,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:7,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:8,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:9,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:0,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:11,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:12,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:13,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:14,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:15,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:16,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:17,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:18,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:19,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:20,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
    // {
    //   id:21,
    //   name: 'The tibit',
    //   comment: 'J.R.R Tolkien',
    // },
  ];
  var index = data.length / 5;
  const Page = () => {
    console.log(indexpage);
    Data = data.slice(indexpage - 5, indexpage);
    console.log(Data);
  };

  const Viewtext = ({headline, info}) => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{color:'black'}}>{headline}</Text>
        <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
          {info}
        </Text>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.top}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Icon
              name="keyboard-arrow-left"
              size={30}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../image/bookmark.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="share" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mid}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpO3MF9__qUgjuzurl9CClmkuPvHeqE3Q8vg&usqp=CAU',
            }}
            style={{
              height: 250,
              width: 200,
              // backgroundColor: 'blue',
              borderRadius: 10,
              elevation: 1,
            }}
          />

          <View
            style={{
              backgroundColor: 'black',
              width: '90%',
              height: 230,
              marginTop: 20,
              borderRadius: 20,
              elevation: 1,
            }}>
            <View
              style={{
                width: '100%',
                height: 160,
                backgroundColor: '#f9f8da',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'black',
                  marginTop: 10,
                }}>
                Ten tac phan
              </Text>
              <Text style={{color:'black'}}>Ten tac gia</Text>
              <View
                style={{
                  width: '100%',
                  height: 100,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Viewtext headline={'rating'} info={4.5}></Viewtext>
                <Viewtext headline={'chuong'} info={1}></Viewtext>
                <Viewtext headline={'language'} info={'viet'}></Viewtext>
                <Viewtext headline={'Audio'} info={'viet'}></Viewtext>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 70,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Reading")}>
                  <Icon name="menu-book" color={'white'} />
                  <Text style={styles.readbook}>Đọc</Text>
                </TouchableOpacity>

                <Text style={{color: 'white'}}>|</Text>

                <TouchableOpacity style={styles.button}>
                  <Icon name="headphones" color={'white'} />
                  <Text style={styles.readbook}>Nghe</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View></View>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text
            style={{
              marginHorizontal: 10,
              marginVertical: 10,
              color: 'black',
              fontWeight: '500',
            }}>
            Với rất nhiều khách hàng, khi chúng tôi có khảo sát khi hỏi về việc
            sử dụng dụng internet để mua bán online thì có đến 90% khi được hỏi
            làm sao bạn quyết định móc hầu bao ra thanh toán online đó là đọc
            các review về sản phẩm, về địa điểm mà họ chuẩn bị sử dụng mua hoặc
            đi đến, chính vì điều đó những bài viết đánh giá địa điểm hoặc sản
            phẩm rất quan trọng trong việc khách hàng có quyết định sử dụng dịch
            vụ hay sản phẩm của bên mình hay không.
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          backgroundColor: '#f5ebd0',
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 20,
          marginBottom: 20,
        }}>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#b8b3a7',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginLeft: 20,
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Bình luận
          </Text>
        </View>

        {data.map(e => {
          return (
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Image
                source={{uri: img}}
                style={{height: 30, width: 30, borderRadius: 20}}
              />
              <View>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  {e.name}
                </Text>
                <Text style={{color: 'black', fontWeight: '400'}}>
                  {e.comment}
                </Text>
              </View>
            </View>
          );
        })}

        <View style={{height: 40}}>
          <Pagination numberOfElements={19} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  top: {
    width: '100%',
    height: 60,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mid: {
    width: '100%',
    height: 550,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    width: '90%',
    backgroundColor: '#e7e6e2',
    borderRadius: 20,
  },
  readbook: {
    paddingHorizontal: 10,
    fontSize: 15,
    color: 'white',
  },
  button: {
    width: '50%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
