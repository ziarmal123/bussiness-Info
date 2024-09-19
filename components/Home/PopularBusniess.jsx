import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const PopularBusniess = ({business}) => {
  const router=useRouter()
  return (
    <TouchableOpacity onPress={()=>router.push('/busniessDetailList/'+business.id)} style={{marginLeft:2,
        padding:10,
        backgroundColor:'#fff',
        borderRadius:15,
        marginLeft:20,
        width:220
    }}>
      <Image source={{uri:business?.imgUrl}} style={{width:200,height:130,borderRadius:15}}/>
      <View style={{marginTop:7,gap:5}}>
        <Text style={{fontFamily:'outfit-B',fontSize:17}}>{business.name}</Text>
        <Text style={{fontFamily:'outfit-R',fontSize:12,color:Colors.GRAY}}>{business.address}</Text>
      <View style={{display:"flex",flexDirection:'row',justifyContent:'space-between'}}>
      <View style={{display:'flex',flexDirection:'row',gap:5}}>
        <Image source={require('../../assets/images/star.png')} style={{width:15,height:15}}/>
        <Text style={{fontFamily:'outfit-B'}}>4.5</Text>
      </View>
      <Text style={{fontFamily:"outfit-B",color:'#fff',borderRadius:5,backgroundColor:Colors.PRIMARY,padding:2,fontSize:12}}>{business.Category}</Text>
      </View>

      </View>
      </TouchableOpacity>
  )
}

export default PopularBusniess

const styles = StyleSheet.create({})