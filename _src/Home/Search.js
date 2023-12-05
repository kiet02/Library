import { View, Text, FlatList, Image } from 'react-native'
import React, { useRef, useState ,useEffect} from 'react'
import { Icon, SearchBar } from 'react-native-elements';
import { data } from '../data';
import { TouchableHighlight } from 'react-native';
import Voice from '@react-native-voice/voice';

export default function Search({navigation}) {
    const [search,setSearch] = useState('')
    const [started, setStarted] = useState(false);
    const [results, setResults] = useState([]);
    let filteredData =[]

 
    let nameBook = ''


    
  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechStart = ()=> setStarted(true);
    Voice.onSpeechEnd =()=> setStarted(false);


    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  }, []);
  const startSpeechToText = async () => {
    await Voice.start('vi_VI');
  };

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
    // search.blur('');
  

   
  };

  

  const onSpeechResults = (result) => {
    setResults(result.value[0]);
    setSearch(result.value[0])
    console.log(result.value[0]);
    data.map((even)=>{
      let search = result.value[0].toLocaleLowerCase().includes(even.name.toLocaleLowerCase())
      if(search){
    // nameBook = even.name
   
        console.log(typeof parseInt(result.value[0].slice(data.lastIndexOf('chuong'))));
        if(result.value[0].slice(data.lastIndexOf('chuong'))){
          console.log(result.value[0],'/',result.value[0].slice(data.lastIndexOf('chuong')));
          navigation.navigate('Book',{uid:even.uid,chapter:result.value[0].slice(data.lastIndexOf('chuong'))})
        }

  
      }else console.log('sai ');
  })
  };

  const onSpeechError = (error) => {
    console.log(error);
  };



    const img ='https://images.pexels.com/photos/1738675/pexels-photo-1738675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
   
    try {
   
    filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()))
    
  
    } catch (error) {
      console.log(filteredData.length);
      console.log(error);
    }

  
     
  

  return (
    <View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

        
        <SearchBar
        platform='android'
        placeholder="Type Here..."
        onChangeText={setSearch}
        containerStyle={{ backgroundColor: 'white',width: '90%',borderRadius:20 }}
        value={search}
      />
      <TouchableHighlight style={{backgroundColor:'white',height:65,justifyContent:'center',borderTopRightRadius:10,borderBottomRightRadius:10}}>
      <Icon name='mic' size={30} 
      onPress={()=>{
        !started ?startSpeechToText() : undefined
        started ? stopSpeechToText() : undefined
      }}
      />

      </TouchableHighlight>
     
</View>
      <FlatList
      data={filteredData ?filteredData : data}
      numColumns={2}
      key={2}

      keyExtractor={(index,item)=>item.toString()}
      renderItem={({index,item})=>{
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
                source={{uri: img}}
                style={{
                  width: 140,
                  height: 150,
                  marginTop: 10,
                  borderRadius: 20,
                }}
              />
              <Text style={{color: 'black',}} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
              <Text >{item.author}</Text>
            </View>
          );
      }}
      />
      
    </View>
  )
}