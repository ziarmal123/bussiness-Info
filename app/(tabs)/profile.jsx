import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserProfile from '../../components/Profile/UserProfile'
import ListOfMenu from '../../components/Profile/ListOfMenu'


const profile = () => {
  
  return (
    <View style={{padding:25}}>
      <UserProfile />
      <ListOfMenu />
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})