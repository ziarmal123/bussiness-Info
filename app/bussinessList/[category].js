import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import { collection } from 'firebase/firestore';
import { BuinessList } from '../../constants/data';
import BusinessListCard from '../../components/BusinessList/BusinessListCard';
import { Colors } from '../../constants/Colors';
export default function BusniessListByCategory () {
    const router=useRouter()
    const [categorybyName, setcategorybyName] = useState([])
    const [loading, setloading] = useState(false)
    const navigation =useNavigation();
    const {category}=useLocalSearchParams()
    useEffect(() => {
        // getBusinessList();
     navigation.setOptions({
        headershown:true,
        headerTitle:category
     })

     FiltredData()
    }, [])
    // const getBusinessList=async()=>{
        //setloading(true)
    //     const q=query(collection(db,'BusinessList'),where('category',"==",category))
    //     const querySnap=await getDocs(q)
    //     querySnap.forEach((doc)=>{
    //         console.log(doc.data())
                //setcategorybyName(prev=>[...prev,{id:doc?.id,...doc.data()}])
               
    //     })
    //setloading(false)
    // }
    const FiltredData = () =>{
    const filteredData=BuinessList.filter(value=> value.Category===category)
     setcategorybyName(filteredData)
    }

    
  return (
    <View>
      {categorybyName.length>0 && loading===false?
      <FlatList
      data={categorybyName}
        refreshing={loading}
        onRefresh={FiltredData}
      renderItem={({item,index})=>(
        <BusinessListCard item={item}/>
      )}
      
      /> :loading?<ActivityIndicator style={{marginTop:'70%'}} size={'large'} color={Colors.PRIMARY}/>: <Text style={{textAlign:'center',fontFamily:'outfit-B',color:Colors.GRAY,marginTop:'70%'}}>Opps! No data Found in this Category</Text> }
    </View>
  )
}



const styles = StyleSheet.create({})


// onRefresh={setFUnction}
// refreshing={loading}