import { View, Text } from 'react-native'
import React from 'react'

export default function Test() {
  
  const text = [
    {name :'que huong'},
    {name :'nha hang ma'},
    {name :'chuong tieu thuyet'},
    {name :'chuong trinh co cao'},
    {name :'co mau'},
    {name :'chuong van chuong'},
  ]
  const data = [
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
  const chuong = 'chuong'
  let filteredData

 const open = 'mo co mau chuong 3'

  text.map((even)=>{
        if(open.includes(even.name)){
      filteredData = even.name
          console.log();
        }
  })
  filteredData ? console.log(filteredData): console.log('khong co sach');
 const search = text.filter((item) =>
 item.name.toLowerCase().includes(filteredData))
console.log(search,'/',open.slice(open.lastIndexOf('chuong')));
console.log(parseInt(open.slice(open.lastIndexOf('chuong')).replace('chuong','')));
  return (
    <View>
      <Text>Test</Text>
    </View>
  )
}
// https://customercare.igloosoftware.com/.api2/binaries/GnaHgYTqVI/thumbnails/cc-ucomingevent-feedcard.gif?width=300
  // console.log(data.lastIndexOf('chuong'));
  // console.log(data.slice(data.lastIndexOf('chuong')));