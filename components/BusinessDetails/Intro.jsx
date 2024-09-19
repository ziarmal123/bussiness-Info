import { StyleSheet, Text, View,Image, TouchableOpacity,Alert, ToastAndroid } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { deleteDoc } from 'firebase/firestore'
import { db } from '../../configs/Firebase'
import { useUser } from '@clerk/clerk-expo'
const Intro = ({Detail}) => {
    const router=useRouter()
    const {user}=useUser()

    const deatilItem =Array.isArray(Detail)?Detail[0] :Detail
    
    if(!deatilItem || !deatilItem.imgUrl){
        return <Text>Error: Detail or imgUrl is not defined</Text>;
    }
    const onDelete = () =>{
      Alert.alert('Do you want to Delete?','Do you really want to delete',
     [ {
        text:"Cancel",
        style:"cancel"
      },
      {
        text:"Delete",
        style:"destructive",
        onPress:()=>(deleteBusiness())
      }
    ]
    )
    }

    const deleteBusiness =async () =>{
      console.log("Deleted")
      // await deleteDoc(doc,(db,'businessList',detailItem?.id))
      router.back()
      ToastAndroid.show('Business Deleted !',ToastAndroid.LONG)
    }

  return (
    <View>
      <View style={{position:'absolute',marginTop:12,zIndex:1,display:'flex',padding:20,flexDirection:'row',justifyContent:"space-between",width:'100%'}}>
        <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back-circle"  size={40} color="white"/>
        </TouchableOpacity>
        <Ionicons name="heart-outline"  size={40} color="white"/>
      </View>
     <Image source={{ uri: deatilItem.imgUrl }} style={{ width: '100%', height: 340 }} />
     <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row',padding:20,marginTop:-20,backgroundColor:'#fff',borderTopLeftRadius:30,borderTopRightRadius:20}}>
     <View style={{padding:5,marginTop:-10,backgroundColor:'#fff',borderTopLeftRadius:30,borderTopRightRadius:20}}>
      <Text style={{fontSize:26,fontFamily:"outfit-B"}}>{deatilItem.name}</Text>
      <Text style={{fontSize:18,fontFamily:"outfit-R"}}>{deatilItem.address}</Text>
     </View>
     {user?.primaryEmailAddress?.emailAddress===deatilItem?.email &&
     <TouchableOpacity onPress={onDelete}>
     <Ionicons name="trash" size={24} color="black"/>
     </TouchableOpacity> }
     
     </View>
     
    </View>
  )
}

export default Intro

const styles = StyleSheet.create({})