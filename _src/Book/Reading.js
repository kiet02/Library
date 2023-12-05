import {View, Text, ScrollView,Animated, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {Icon} from '@rneui/themed';
import { Slider } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import { data } from '../data';

// import { data } from '../data';

// import Animated from 'react-native-reanimated';

export default function Reading({navigation}) {
  const [value, setValue] = useState(15);
  const [modalVisible, setModalVisible] = useState(false)
  const [chapter, setChapter] = useState(0)
  const [name,setName] =useState('')
  const route = useRoute();
  const {uid,chapters} = route.params

  useEffect(()=>{
    data.map((event)=>{
      if (event.uid == uid){
        setName(event.name)
      }
    })
setChapter(chapters)
  },[chapters])

  const chap = [
    {chuong: 'chuong 1'},
    {chuong: 'chuong 2'},
    {chuong: 'chuong 3'},
    {chuong: 'chuong 4'},
    {chuong: 'chuong 5'},
    {chuong: 'chuong 6'},
    {chuong: 'chuong 7'},
    {chuong: 'chuong 8'},
    {chuong: 'chuong 9'},
    {chuong: 'chuong 10'},

  ];

  const scrollY = useRef(new Animated.Value(0)).current
 
  const animaheight =scrollY.interpolate({
    inputRange:[0,20],
    outputRange:[0,200],
    extrapolate:'clamp'
  })
 
  return (
    <View style={{flex: 1}}>

      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
        <View style={styles.centeredView}>
        <Text onPress={()=>{setModalVisible(!modalVisible)}} style={{textAlign:'right',marginRight:10,marginTop:10}}> X </Text>

        <ScrollView >
        {chap.map((e)=>{
          return(
            <TouchableOpacity>
              <Text onPress={()=>setChapter(data.indexOf(e))} style={{textAlign:'center',marginVertical:10}}>{e.chuong}</Text>

            </TouchableOpacity>
          )
        })}

      </ScrollView>
      </View>

      </Modal>

      <View style={{width: '100%', height: 60, backgroundColor: '#eaeaea',}}>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icon name="keyboard-arrow-left" size={40}></Icon>

            </TouchableOpacity>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
            {name}
          </Text>
          <Icon name="more-vert" size={40}></Icon>
        </View> 
      </View>
      <View style={{backgroundColor:'#eaeaea',
    }}>
    
       <View style={{alignSelf:'center',width:'95%',height: 20,flexDirection:'row',justifyContent:'space-around'}}>
        <Text onPress={()=>{chapter > 0 ?setChapter(chapter-1):null}} style={{textAlign:'center'}}>{'<'}</Text>
        <Text onPress={()=>{setModalVisible(!modalVisible)}} style={{textAlign:'center'}}>{chap[chapter].chuong}/{chap.length}</Text>
        <Text onPress={()=>{chapter <= (chap.length-2) ?setChapter(chapter+1):null}} style={{textAlign:'center'}}>{'>'}</Text>

       </View>


</View>
<View style ={{width:'100%'}}>
   <Animated.ScrollView
      scrollEventThrottle={16}
      onScroll={Animated.event([{nativeEvent:{contentOffset : {y:scrollY}}}],{useNativeDriver:true})}
      >
        <Text style ={{width: '95%',alignSelf:'center',borderRadius:10,backgroundColor:'white',color:'black',fontWeight:'400',textAlign:'center',fontSize:value}}>
          {chap[chapter].chuong}
    
        </Text>
      </Animated.ScrollView>
          <Animated.View style={{width:'95%',height:50,backgroundColor:'#ffeca0',elevation:1,position:'absolute',justifyContent:'center',bottom:170,borderRadius:20,alignSelf:'center',transform:[{translateY:animaheight}]}}>
          <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={20}
        minimumValue={15}
        step={0.5}
        allowTouchTrack
        style={{width:'90%',alignSelf:'center'}}
        trackStyle={{ height: 5, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
    
            />
          ),
        }}
      />
          </Animated.View>

          <Animated.View style={[styles.actionbutton,{bottom:100,left:10,transform:[{translateY:animaheight}]}]}>
            <Icon name='headphones' size={35}/>
          </Animated.View>

          <Animated.View style={[styles.actionbutton,{bottom:100,alignSelf:'center',transform:[{translateY:animaheight}]}]}>
          <Icon name='abc' size={60}/>

          </Animated.View>
          <Animated.View style={[styles.actionbutton,{bottom:100,alignSelf:'flex-end',right:10,transform:[{translateY:animaheight}]}]}>
          <Icon name='dark-mode' size={40}/>
        
          </Animated.View>

        
        
          
</View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  actionbutton:{
    width:100,height:60,backgroundColor:'#ffeca0',borderRadius:20,position:'absolute',justifyContent:'center',alignItems:'center',elevation:1
  },
  centeredView: {
    width: "100%",height: 200,
    backgroundColor:'white',
  //  justifyContent: 'center',
  //  alignItems: 'center',
   alignSelf:'center',
   position:'absolute',
   bottom:-10,
   borderTopLeftRadius:20,
   borderTopRightRadius:20,
   },
})