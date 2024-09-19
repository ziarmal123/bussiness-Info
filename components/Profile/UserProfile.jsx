import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
const UserProfile = () => {

    const {user} =useUser()
  return (
    <View style={{marginTop:20}}>
      <Text style={{fontFamily:'outfit-B' ,fontSize:35}}>Profile</Text>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:10,gap:5}}>
            {/* <Image source={require('../../assets/images/react-logo.png')} style={{height:200, width:200,borderRadius:99}} /> */}
            <Image source={{uri:user?.imageUrl}} style={{height:200, width:200,borderRadius:99}} />
            <Text style={{fontFamily:"Space-Mono",fontSize:15}}>{user?.fullName}</Text>
            <Text style={{fontFamily:'outfit-M' ,fontSize:15}}>{user?.primaryEmailAddress?.emailAddress}</Text>
        </View>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({})