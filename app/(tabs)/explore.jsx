import { SafeAreaView, StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'
import CategoryList from '../../components/Home/CategoryList'
import { db } from '../../configs/Firebase'
import { where } from 'firebase/firestore'
import { BuinessList } from '../../constants/data'
import ExploreBussiness from '../../components/Explore/ExploreBussiness'


const explore = () => {
  const [searchValue, setsearchValue] = useState("")
  const [BussinessList, setBussinessList] = useState([])

const GetBussinessByCategory = (v) =>{
  setBussinessList([])
  const data = BuinessList.filter((value)=>
    value.Category===v)
  setBussinessList(data)
}
  // const GetBussinessByCategory =async (value) =>{
  //   const q=query(collection(db,'BussinesslIst'),where('category','==',value))
  //   const snapShot= await getDocs(q)
  //   snapShot.forEach((doc)=>{
  //     console.log(doc.data())
        // setBussinessList(prev=>[...prev,{id:doc.data.id,...doc.data}])
  //   })
  // }
  return (
    <SafeAreaView style={{padding:20,marginTop:20,flex:1}}>
      <Text style={{fontFamily:"outfit-B",fontSize:25}}> Explore More</Text>
      <View style={styles.searchStyles}>
        <Ionicons name='search' size={24}  color={Colors.PRIMARY}/>
        <TextInput placeholder='Search ....' value={searchValue} onChangeText={setsearchValue} style={{fontFamily:"outfit-R",fontSize:20}}/>
    </View>
    <CategoryList explore={true} onCategorySelect={(v)=>GetBussinessByCategory(v)}/>
    <ExploreBussiness BussinessList={BussinessList}/>
    </SafeAreaView>
  )
}

export default explore

const styles = StyleSheet.create({
  searchStyles:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:"#fff",
    gap:10,
    padding:10,
    marginVertical:10,
    marginTop:20,
    borderRadius:12,
    borderWidth:1,
    borderColor:Colors.PRIMARY
}
})