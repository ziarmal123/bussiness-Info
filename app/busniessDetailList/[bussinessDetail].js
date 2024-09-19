import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { Stack,useNavigation,useLocalSearchParams } from 'expo-router'
import { BuinessList } from '../../constants/data' 
import { collection, doc, query } from 'firebase/firestore'
import {db} from '../../configs/Firebase'
import { Colors } from '../../constants/Colors'
import Intro from '../../components/BusinessDetails/Intro'
import ActionButton from '../../components/BusinessDetails/ActionButton'
import About from '../../components/BusinessDetails/About'
import Review from '../../components/BusinessDetails/Review'
const DetailPage = () => {
  const navigation=useNavigation()
  const {bussinessDetail}=useLocalSearchParams()
  const [Detail, setDetail] = useState()
  const [loading, setLoading] = useState(false)

      const filtredData=()=>{
      setLoading(true)
      const DetailData= BuinessList.filter((data,index)=>data.id===Number(bussinessDetail))
      setDetail(DetailData)
      setLoading(false)
    }
    // const GetBussinessDetailById =async ()=>{
      // setLoading(true)
    //   const docRef= doc(db,'BusinessList',bussinessDetail)
    //   const docSnap= await getDoc(docRef);
    //   if(docSnap.exists()){
    //     console.log("Document data:",docSnap)
        //  setDetail({id:docSnap.id,...docSnap.data()})
    // setLoading(false)
    //   }
    //   else{
    //     console.log("No such documents")
    //   }
    // }
 
  useEffect(() => {
    // getBusinessList();
    filtredData()
    navigation.setOptions({
    headerShown:false,
 })
},[])
  
  return (
    <SafeAreaView style={{flex:1}}>
      {/* {loading?<ActivityIndicator style={{marginTop:'70'}} size={'large'} color={Colors.PRIMARY}/>:
     <View>
        <Intro Detail={Detail}/>
     </View>
      
      } */}

      <ScrollView>
        <Intro Detail={Detail}/>
        <ActionButton Detail={Detail}/>
        <About Detail={Detail}/>
        <Review Detail={Detail}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailPage

const styles = StyleSheet.create({})