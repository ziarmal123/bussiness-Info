import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import CategoryList from '../../components/Home/CategoryList'
import PopularBusniessList from '../../components/Home/PopularBusniessList'
const home = () => {
  return (
    <ScrollView>
      <Header />
      <Slider/>
      <CategoryList/>
      <PopularBusniessList/>
    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({})