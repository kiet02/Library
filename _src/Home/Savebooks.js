import {View, Text, FlatList, Dimensions, Image,BackHandler} from 'react-native';
import React, {useState} from 'react';
import { Icon } from '@rneui/themed';

export default function Savebooks({navigation}) {
  const w = Dimensions.get('screen').width;
  const data = [
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      img: 'https://images.pexels.com/photos/1738675/pexels-photo-1738675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      img: 'https://images.pexels.com/photos/1738675/pexels-photo-1738675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: '1984',
      author: 'George Orwell',
      img: 'https://images.pexels.com/photos/1738675/pexels-photo-1738675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      img: 'https://images.pexels.com/photos/1738675/pexels-photo-1738675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: '1984',
      author: 'George Orwell',
      img: 'https://images.pexels.com/photos/1738675/pexels-photo-1738675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      img: 'https://images.pexels.com/photos/1738675/pexels-photo-1738675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];
  const [numColumns, setNumColumns] = useState(2);
  return (
    <View style={{backgroundColor: '#fcf3de'}}>
      <FlatList
        data={data}
        key={numColumns}
        numColumns={numColumns}
        ListHeaderComponent={() => {
          return (
            <View style={{flexDirection:'row',backgroundColor:'white',elevation:1,height:50}}> 
            <Icon onPress={()=>navigation.openDrawer()} name='menu' size={40}/>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 30,
                marginLeft: 10,
              }}>
              Sách đã lưu
            </Text>
            </View>
          );
        }}
        keyExtractor={(index, item) => item.toString()}
        renderItem={({index, item}) => {
          return (
            <View
              style={{
                width: '40%',
                height: 200,
                marginHorizontal: 20,
                marginVertical: 20,
                alignItems: 'center',
                borderRadius: 20,
                backgroundColor:'white',
                elevation:1
              }}>
              <Image
                source={{uri: item.img}}
                style={{
                  width: 140,
                  height: 150,
                  marginTop: 8,
                  borderRadius: 15,
                }}
              />
              <Text style={{color: 'black'}}>{item.title}</Text>
              <Text>{item.author}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
