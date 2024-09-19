import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity, Share } from 'react-native'
import React from 'react'
import {Colors} from '../../constants/Colors'
import { useRouter } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'


const ListOfMenu = () => {
    const router=useRouter()
    const {signOut} =useAuth()
    const MenuList=[{
        id:1,
        name:"Add Bussiness",
        icon:'https://cdn-icons-png.flaticon.com/128/9638/9638352.png',
        path:"/ProfileTabs/Add-business"
    },
    {
        id:2,
        name:"My Business",
        icon:'https://cdn-icons-png.flaticon.com/128/3135/3135727.png',
        path:"/ProfileTabs/mybusniess"
    },
    {
        id:3,
        name:"Share App",
        icon:"https://cdn-icons-png.flaticon.com/128/719/719731.png",
        path:'Share'
    },
    {
        id:4,
        name:"Logout",
        icon:'https://cdn-icons-png.flaticon.com/128/4436/4436954.png',
        path:"logout"
    }
]

const onMenuClick = (item) =>{
  if(item.path==='logout'){
    signOut();
    return;
  }
  if(item.path==='Share'){
    Share.share({
      message:'Download the app from PlayStore, DownloadUrl'
    })
    return;
  }
  router.push(item.path)
}
  return (
    <View style={{marginTop:10}}>
      <FlatList 
      numColumns={2}
      data={MenuList}
      renderItem={({item,index})=>(
        <TouchableOpacity onPress={()=>onMenuClick(item)} style={{backgroundColor:'#fff',display:'flex',borderColor:Colors.PRIMARY,borderRadius:15,borderWidth:1,margin:10,padding:10,flexDirection:'row',alignItems:'center',gap:5,flex:1}}>
            <Image source={{uri:item.icon}} style={{width:50,height:50}}/>
            <Text style={{fontFamily:"outfit-M",fontSize:13,flex:1}}>{item.name}</Text>
        </TouchableOpacity>
      )
    }
      />

      <Text style={{fontFamily:'outfit-R',textAlign:'center',marginTop:50,color:Colors.GRAY}}>Developed By Ziarmal Hussain</Text>
    </View>
  )
}

export default ListOfMenu

const styles = StyleSheet.create({})