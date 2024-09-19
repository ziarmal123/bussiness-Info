import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const BusinessCard = ({item}) => {
    const router=useRouter()
    console.log(item)
  return (
    <TouchableOpacity onPress={()=>router.push('/busniessDetailList/'+item.id)} style={{marginTop:15}}>
      <Image source={{uri:item.imgUrl}} style={{width:'100%',height:150,borderTopLeftRadius:15,borderTopRightRadius:15}}/>
        <View style={{padding:10,backgroundColor:'#fff',borderBottomLeftRadius:15,borderBottomRightRadius:15,}}>
            <Text style={{fontFamily:'outfit-B',fontSize:20}}>{item.name}</Text>
            <Text style={{fontFamily:'outfit-R',color:Colors.GRAY }}>{item.address}</Text>
        
        </View>
    </TouchableOpacity>
  )
}

export default BusinessCard

const styles = StyleSheet.create({})