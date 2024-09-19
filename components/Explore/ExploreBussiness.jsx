import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BusinessCard from './BusinessCard'

const ExploreBussiness = ({BussinessList}) => {
    // console.log(BussinessList)

  return (
    <View style={{flex:1}}>
      <FlatList 
      data={BussinessList}
      showsVerticalScrollIndicator={false}
      renderItem={({item,index})=>(
        <View>
            <BusinessCard key={index} item={item}/>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      />
 </View>
  )
}

export default ExploreBussiness

const styles = StyleSheet.create({})