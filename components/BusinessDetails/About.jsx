import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = ({Detail}) => {

    const deatilItem =Array.isArray(Detail)?Detail[0] :Detail
    console.log(deatilItem)
    if(!deatilItem || !deatilItem.imgUrl){
        return <Text>Error: Detail or imgUrl is not defined</Text>;
    }
  return (
    <View style={{padding:20,marginTop:-10,backgroundColor:'#fff'}}>
      <Text style={{fontFamily:"outfit-B",fontSize:20}}>About</Text>
      <Text style={{fontFamily:'outfit-R',lineHeight:20}}>{deatilItem.about}</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})