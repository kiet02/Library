import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function DrawerCustom(props) {
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}
      
      >
        <ImageBackground source={require('./image/bg.jpg')} style={{flexDirection:'row',width: '100%',height:200,alignItems:'flex-end'}}>
<Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'}}
        style={{width: 50,height: 50,}}/>
        <Text style={{fontSize:20,color:"black",fontWeight:'bold',marginLeft:10,textAlignVertical:'bottom',alignSelf
        :"flex-end"}}>Dashboard</Text>

        </ImageBackground>
        
         <DrawerItemList {...props}/>
      </DrawerContentScrollView>
    </View>
  )
}