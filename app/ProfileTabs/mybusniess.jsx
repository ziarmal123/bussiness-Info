import { FlatList, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation } from 'expo-router'
import { useUser } from '@clerk/clerk-expo'
import {db} from '../../configs/Firebase'
import { where } from 'firebase/firestore'
import PopularBusniess from '../../components/Home/PopularBusniess'
const mybusniess = () => {
    const [BusinessList, setBusinessList] = useState([])
    const [loading, setloading] = useState(false)
    const {user} =useUser()
    const navigation=useNavigation()


    const getUserBusiness = async() =>{
        setloading(true)
        setBusinessList([])
        const q=query(collection(db,'BusinessList'),where('userEmail','==',user.primaryEmailAddress.emailAddress))
    
        const querySnapShot= await getDocs(q)
        querySnapShot.forEach((doc)=>(
            setBusinessList(prev=>[...prev,{id:doc.id,...doc.data}])
        ))
        setloading(false)

    }   
    useEffect(() => {
        navigation.setOptions({
          headerShown:false
       })
    
      //  onCategorySave()
      }, [])
  return (
    <View style={{padding:20}}>
      <Text style={{fontFamily:'outfit-B',fontSize:30,marginTop:20}}>My Busniess</Text>
      <FlatList 
     
      data={BusinessList}
      renderItem={({item,index})=>(
        <PopularBusniess key={index} business={item}/>
      )}
      
      />
    </View>
  )
}

export default mybusniess

const styles = StyleSheet.create({})