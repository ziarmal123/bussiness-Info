import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const BusinessListCard = ({item}) => {
  
  const router=useRouter()
  return (
    <TouchableOpacity onPress={()=>router.push('/busniessDetailList/'+item.id)}>
    <View style={{display:'flex',flexDirection:'row',backgroundColor:'#fff',padding:10,margin:8,borderRadius:14,borderColor:'black'}}>
      <Image source={{uri:item.imgUrl}} height={120} width={120} style={{borderRadius:10}}/>
      <View style={{marginLeft:10,flex:1,gap:7}}>
        <Text style={{fontFamily:'outfit-B',fontSize:15}}>{item.name}</Text>
        <Text style={{fontFamily:'outfit-R',fontSize:17,color:Colors.GRAY}}>{item.address}</Text>
        <View style={{display:'flex',flexDirection:'row',gap:5}}>
        <Image source={require('../../assets/images/star.png')} style={{width:15,height:15}}/>
        <Text style={{fontFamily:'outfit-B'}}>4.5</Text>
      </View>
      </View>
      
    </View>
    </TouchableOpacity>
  )
}

export default BusinessListCard

const styles = StyleSheet.create({})