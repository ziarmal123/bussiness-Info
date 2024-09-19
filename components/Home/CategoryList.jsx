import { FlatList, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { Colors } from '../../constants/Colors'
import { collection, query } from 'firebase/firestore'
import { db } from '../../configs/Firebase'
import { category } from '../../constants/data'
import CategoryItem from './CategoryItem'
import { useRouter } from 'expo-router'
const CategoryList = ({explore=false,onCategorySelect}) => {
  const CategoryHandler = (value) =>{
    if(!explore){
      router.push('/bussinessList/'+value.name)
    }
    else{
      onCategorySelect(value.name)
    }
    
  }

  const router =useRouter()
    const [Category, setCategory] = useState([])
    useEffect(() => {
      GetCategoryList()
    }, [])
    
    // const GetCategoryList =async()=>{
    //     const q=query(collection(db))
    //     const querySnapShot=await getDocs(q)
    //     querySnapShot.forEach(element => {
    //         console.log(element.data())
    //     });
    // }
    const GetCategoryList =async()=>{
        setCategory([])
      category.map((data)=>setCategory(e=>[...e,data]))
    }
  return (
    <View>
      {!explore&&<View style={{display:'flex',padding:20,flexDirection:'row',justifyContent:'space-between',marginTop:10,}}>
             <Text style={{paddingLeft:5,fontSize:20,fontFamily:'outfit-B'}}>Category</Text>
             <Text style={{color:Colors.PRIMARY,fontFamily:'outfit-B'}}>View All</Text>
        </View>}
     
        <View>
            <FlatList data={category} showsHorizontalScrollIndicator={false} horizontal={true} style={{marginLeft:25}}
            renderItem={({item,index})=>(
                <CategoryItem key={index} item={item}
                
                onCategoryPress={(value)=>CategoryHandler(value)}
                />
  )}
            
            />
        </View>
     
    </View>
  )
}

export default CategoryList

const styles = StyleSheet.create({})