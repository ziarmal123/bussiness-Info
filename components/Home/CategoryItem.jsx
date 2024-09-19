import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const CategoryItem = ({item,onCategoryPress}) => {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(item)}>
        <View style={{padding:15,backgroundColor:Colors.ICON,borderRadius:99,marginRight:15}}>
           <Image source={{uri:item.icon}} style={{width:40,height:40}}/>  
        </View>
        <Text style={{fontSize:10,fontFamily:'outfit-B',textAlign:'center'}}>{item.name}</Text>
     
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({})