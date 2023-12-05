import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withDelay,
  withTiming,
  Easing,
  ReduceMotion,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';

export default function Signup({navigation}) {
  const Width = Dimensions.get('screen').width;
  const translateX = useSharedValue(0);
  const translateXbt = useSharedValue(0);
  const [test, settest] = useState(false);
  const opacity1 = useSharedValue(1);
  const opacity2 = useSharedValue(0);

  const DURATION = 1000;
  const DELAY = 500;

  const Show=()=>{
    opacity1.value = withDelay(1, withTiming(0, { duration: DURATION}));
    opacity2.value = withDelay(2000, withTiming(1, { duration: DURATION}));

  }
  
  const handlePress = () => {
    if (test == false) {
      translateXbt.value = 5;
      translateX.value = Width;
      settest(true);
    } else{
      setTimeout(() => {
     navigation.navigate('Home')
        
      }, 6000);
    Show()
    }

    // width.value = withSpring(width.value +100);
  };
  const BackhandlePress = () => {
    translateX.value = 0;
    settest(false);
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: withDelay(0, withTiming(translateXbt.value))}],
  }));
  const animatedStyles2 = useAnimatedStyle(() => ({
    transform: [{translateX: withDelay(300, withTiming(-translateX.value))}],
  }));
  const animatedStyles1 = useAnimatedStyle(() => ({
    transform: [{translateX: withDelay(200, withTiming(-translateX.value))}],
  }));



  return (
    <View style={Style.main}>
      <Animated.Image source={require('../image/a.png')} style={{...Style.imag,opacity:opacity1}} />
      <View style={{...Style.imag,position:'absolute',justifyContent:'flex-end',alignItems:'center'}}>
        {
          test ? 
          <Animated.Text style={{fontFamily: 'Cochin',fontSize:50,color:'black',opacity:opacity2}}>Bắt đầu</Animated.Text>
          :null
        }
       
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: Width}}>
            <Animated.Text
              style={[{marginTop: 20, marginLeft: 20}, animatedStyles1]}>
              Tài khoản:
            </Animated.Text>
            <Animated.View style={animatedStyles1}>
              <TextInput style={Style.tinp} />
            </Animated.View>

            <Animated.Text style={[{marginLeft: 20}, animatedStyles1]}>
              Mật khẩu:
            </Animated.Text>
            <Animated.View style={animatedStyles1}>
              <TextInput style={Style.tinp} />
            </Animated.View>

            <Animated.Text style={[{marginLeft: 20}, animatedStyles1]}>
              Mật khẩu nhắc lại:
            </Animated.Text>
            <Animated.View style={animatedStyles1}>
              <TextInput style={Style.tinp} />
            </Animated.View>
          </View>

          <View style={{width: Width, justifyContent: 'center'}}>
            <Animated.Text style={[{marginLeft: 20,opacity:opacity1}, animatedStyles2]}>
              Tên của bạn
            </Animated.Text>
            <Animated.View style={[animatedStyles2,{opacity:opacity1}]}>
              <TextInput style={Style.tinp} />
            </Animated.View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: Width,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {test ? (
            <TouchableOpacity onPress={BackhandlePress}>
              <Animated.View
                entering={FadeIn.duration(400)}
                exiting={FadeOut}
                style={{
                  width: 70,
                  height: 50,
                  backgroundColor: 'red',
                  borderRadius: 50,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity:opacity1
                }}>
                <Icon name="keyboard-arrow-left" size={40}></Icon>
              </Animated.View>
            </TouchableOpacity>
          ) : null}

          <TouchableOpacity onPress={handlePress}>
            <Animated.View
              entering={FadeIn.duration(400)}
              exiting={FadeOut}
              style={[
                {
                  width: 70,
                  height: 50,
                  backgroundColor: 'red',
                  borderRadius: 50,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity:opacity1

                },
                animatedStyles,
              ]}>
              <Icon
                name={test ? 'check' : 'keyboard-arrow-right'}
                size={40}></Icon>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
      <Animated.View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 30,opacity:opacity1
    }}>
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: test ? 'red' : 'black',
            borderRadius: 50,
            marginRight: 10,
          }}
        />
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: test ? 'black' : 'red',

            borderRadius: 50,
          }}
        />
      </Animated.View>
    </View>
  );
}
const Style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fcf3de',
  },
  imag: {
    width: 400,
    height: 300,
    marginTop: 20,
  },
  tinp: {
    width: 350,
    height: 50,
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 1,
  },
  box: {
    backgroundColor: '#b58df1',
    width: 350,
    height: 50,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
});
