import { View, Text, Image, StyleSheet,BackHandler, Modal, Button, TextInput, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements';

export default function User({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modal,setmodal] =useState('')



const SetModal = ()=>{
  if(modal == 'name') return(<View style={{flex:1,width: '100%',justifyContent:'center',alignItems:'center'}}>
  <TextInput placeholder='Tên mới' style={{width: '70%',height: 50,borderRadius:20,textAlign:'center',borderWidth:2}}/>
   <View style={{width: '40%',height:50,backgroundColor:'red',marginTop:10,justifyContent:'center',alignItems:"center",borderRadius:30}}>
    <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Đổi</Text>
 </View>
   </View>)
   if(modal == 'matkhau') return(
    <View style={{flex:1,width: '100%',justifyContent:'center',alignItems:'center'}}>
  <TextInput placeholder='Mật khẩu cũ' style={{width: '70%',marginTop:10,height: 50,borderRadius:20,textAlign:'center',borderWidth:2}}/>
  <TextInput placeholder='Mật khẩu mới' style={{width: '70%',marginTop:10,height: 50,borderRadius:20,textAlign:'center',borderWidth:2}}/>
  <TextInput placeholder='Nhắc lại mật khẩu' style={{width: '70%',marginTop:10,height: 50,borderRadius:20,textAlign:'center',borderWidth:2}}/>
  
   <View style={{width: '40%',height:50,backgroundColor:'red',marginTop:10,justifyContent:'center',alignItems:"center",borderRadius:30}}>
    <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Đổi</Text>
 </View>
   </View>
   )
}

  return (
    <View style={{flex:1,backgroundColor:'#fcf3de'}}>

    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      setModalVisible(!modalVisible);
    }}>

<View style={{width: "100%",height: "55%",alignItems:'flex-start',backgroundColor:'#f8f8f8',position:'absolute',bottom:0,elevation:10,borderTopLeftRadius:30,borderTopRightRadius:30}}>
<Icon name='keyboard-arrow-left' size={40} onPress={()=> setModalVisible(false)}/>
 
 <SetModal/>
    
</View>

    </Modal>
    <View style={{width: '100%',alignItems:'flex-start',backgroundColor:'white'}}>
    <Icon name='menu' size={40}  onPress={()=>navigation.openDrawer()}/>

    </View>
    
<View style={{width: '100%',height: 300,backgroundColor:'#fcf3de',justifyContent:'flex-end',alignItems:'center'}}>
       
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'}} style={{width: 150,height: 150,borderRadius:50}}/>
      </View>
       <Text style={{color:'black',alignSelf:'center',fontWeight:'bold',fontSize:25,}}>Ten nguoi dung</Text>
    
    <Text onPress={()=>{setModalVisible(true),setmodal('name')}} style={styles.text}>Đổi tên người dùng</Text>
    <Text onPress={()=>{setModalVisible(true),setmodal('matkhau')}} style={styles.text}>Thay đổi mật khẩu</Text>
    <Text style={styles.text}>Đăng xuất</Text>


    </View>

  )
}
const styles =  StyleSheet.create({
  text:{
    color:'black',
    marginTop:20,
    backgroundColor:'#ededed',
    paddingVertical:10,
    // paddingLeft:10,
    paddingHorizontal:90,
    borderRadius:20,
    elevation:2,
    // width:'80%',
    alignSelf:'center',
},
})