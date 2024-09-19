import { FlatList, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { Colors } from '../../constants/Colors'
import { collection, limit, query } from 'firebase/firestore'
import { BuinessList } from '../../constants/data'
import PopularBusniess from './PopularBusniess'
const PopularBusniessList = () => {
  // const GetBusniessList=async()=>{
  //   const q=query(collection(db,'BusinessList'),limit(10))
  //   const querysnapShot= await getDocs(q)

  //   querysnapShot.forEach((data)=>
  //   console.log(data)
  //    setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()]})
  //   )
  // }

  const [BusinessListA, setBusinessListA] = useState([])
  const GetBusniessList=async()=>{
    setBusinessListA([])
    BuinessList.forEach((data)=>{
    setBusinessListA(prev=>[...prev,data])
  
  })
  }
  useEffect(() => {
  GetBusniessList()
  }, [])
  
  return (
    <View style={{marginBottom:10}}>
      <View style={{display:'flex',padding:20,flexDirection:'row',justifyContent:'space-between',marginTop:10,}}>
             <Text style={{paddingLeft:5,fontSize:20,fontFamily:'outfit-B'}}>Popular Business</Text>
             <Text style={{color:Colors.PRIMARY,fontFamily:'outfit-B'}}>View All</Text>
        </View>
        <FlatList
        horizontal={true}
        data={BusinessListA.slice(0,3)}
        renderItem={({item,index})=>(
          <PopularBusniess  key={index} business={item} />
        )}
        />
    </View>
  )
}

export default PopularBusniessList

const styles = StyleSheet.create({})