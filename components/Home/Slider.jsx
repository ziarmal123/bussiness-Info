import { FlatList, StyleSheet, Text, View ,Image} from 'react-native'
import React,{useEffect,useState} from 'react'
import { collection,getDocs,query } from 'firebase/firestore'
import {db} from '../../configs/Firebase'
import {data} from '../../constants/data'
// const Slider = () => {
//     useEffect(() => {
//       getSliderList()
    
//     }, [])
    
//     const getSliderList =async () =>{
//         const q=query(collection(db,'Slider'))
//         const querySnapShot = await getDocs(q)
//         querySnapShot.forEach((doc)=>{
//             console.log(doc.data())
//         })
//     }
//   return (
//     <View>
//       <Text>Slider</Text>
//     </View>
//   )
// }
const Slider = () => {
    const [sliderList, setSliderList] = useState([])
    useEffect(() => {
      getSliderList()
    }, [])

    
    const getSliderList = () =>{
        setSliderList([])
        data.forEach((doc)=>{
            setSliderList(e=>[...e,doc])
        })
    }
  return (
    <View>
      <Text style={{fontFamily:'outfit-M',paddingLeft:20,paddingTop:10,marginBottom:5,fontSize:20}}>#Special for you</Text>
      <FlatList data={sliderList} horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.ListStyle}
      renderItem={({item,index})=>(
        <Image source={{uri:item.imageUrl}} style={{width:300,height:160,borderRadius:15,marginRight:20}} />

      )}
      />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    ListStyle:{
        paddingLeft:20
    }
})