import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { Rating } from 'react-native-ratings'
import { Colors } from '../../constants/Colors'
import { doc ,db, arrayUnion} from 'firebase/firestore'
import { useUser } from '@clerk/clerk-expo'

const Review = ({Detail}) => {
    const [rating, setRating] = useState(4)
    const [userInput, setuserInput] = useState('')
    const {user} = useUser()

    const deatilItem =Array.isArray(Detail)?Detail[0] :Detail
    if(!deatilItem || !deatilItem.imgUrl){
        return <Text>Error: Detail or imgUrl is not defined</Text>;
    }

  const onSubmitFunction = async() =>{
    // const docRef=doc(db,'BussinessList',Detail.id)
    // await updateDoc(docRef ,{
    //   reviews:arrayUnion({
    //     rating:rating,
    //     comment:userInput,
    //     userName:user?.fullName,
    //     userImage:user?.imageUrl
    //   })
    // }
  
    // )
    // ToastAndroid.show('Comment Added Successfully',ToastAndroid.BOTTOM)
    setRating(0)
    setuserInput('')
    
  }

  return (
    <View style={{padding:20, backgroundColor:"#fff"}}>
      <Text style={{fontFamily:'outfit-B',fontSize:20}}>Review</Text>
      <View>
        <Rating 
        imageSize={20}
        showRating={false}
        onFinishRating = {(rating)=>setRating(rating)}
        style={{paddingVertical:10}}
        />
        <TextInput value={userInput} onChangeText={(value)=>setuserInput(value)} numberOfLines={4} placeholder='Enter Your Comment' style={{borderWidth:1,borderColor:Colors.GRAY,textAlignVertical:'top',padding:10,borderRadius:10,}}/>
        {!userInput?( <TouchableOpacity onPress={()=>onSubmitFunction()} disabled={!userInput} style={{backgroundColor:Colors.GRAY,marginTop:10,borderRadius:10,padding:10}}>
        <Text style={{fontFamily:"outfit-B",textAlign:'center',color:"#fff"}}>Submit</Text>
        </TouchableOpacity>):(<TouchableOpacity onPress={()=>onSubmitFunction()} disabled={!userInput} style={{backgroundColor:Colors.PRIMARY,marginTop:10,borderRadius:10,padding:10}}>
        <Text style={{fontFamily:"outfit-B",textAlign:'center',color:"#fff"}}>Submit</Text>
        </TouchableOpacity>)}
        
        
      </View>
      {/* T0 Display the Comments */}
      {/* <View>
        {Detail.Review.map((item,index)=>(
          <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',padding:10,borderWidth:1,borderColor:'gray',borderRadius:15,marginTOp:10}}>
            <Image source={{item}} style={{width:50,height:50,borderRadius:99}} />
          
            <View style={{display:'flex'}}>
               <Text>{item.comment}</Text> 
               <Text>{item.name}</Text>
               <Rating style={{alignItems:"flex-start"}} imageSize={20} ratingCount={item.rating}/>

            </View>
          </View>
        ))}
      </View> */}
    </View>
  )
}

export default Review

const styles = StyleSheet.create({})