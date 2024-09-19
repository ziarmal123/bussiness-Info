import { StyleSheet, Text, View,Image, TextInput } from 'react-native'
import React,{useState} from 'react'
import { useUser } from '@clerk/clerk-expo'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Colors} from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
const Header = () => {
    const {user} =useUser()

    const [searchValue, setsearchValue] = useState("")
  return (
    <SafeAreaView style={styles.header}>
    <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
        <View>
        <Image source={{uri:user?.imageUrl}} style={styles.imageStyle}/>
        </View>
        <View>
        <Text style={styles.WelcomeStyle}>Welcome</Text>
        <Text style={styles.NameStyle}>{user?.fullName}</Text>
        </View>
       
    </View>
    <View style={styles.searchStyles}>
        <Ionicons name='search' size={24}  color={Colors.PRIMARY}/>
        <TextInput placeholder='Search ....' value={searchValue} onChangeText={setsearchValue} style={{fontFamily:"outfit-R",fontSize:20}}/>
    </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        padding:20,
        paddingTop:20,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    imageStyle:{
        height:45,
        width:45,
        borderRadius:99
    },
    WelcomeStyle:{
        color:'#fff'
    },
    NameStyle:{
        fontFamily:'outfit-M',
        fontSize:19,
        color:'#fff'
    },
    searchStyles:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"#fff",
        gap:10,
        padding:10,
        marginVertical:10,
        marginTop:20,
        borderRadius:12

    }
})