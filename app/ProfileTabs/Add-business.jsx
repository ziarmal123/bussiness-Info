import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput, ToastAndroid, ActivityIndicator, ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker'
import RNPickerSelect from 'react-native-picker-select';
import { getDownloadURL } from 'firebase/storage';
import { useUser } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
const Addbusiness = () => {
  const {user}=useUser()
  const router=useRouter()
  const [SaveImage, setSaveImage] = useState(null)
  const [categoryList, setCategoryList] = useState([])

  const [Name, setName] = useState("")
  const [Website, setWebsite] = useState("")
  const [contact, setcontact] = useState("")
  const [about, setabout] = useState("")
  const [Address, setAddress] = useState("")
  const [loading, setloading] = useState(false)


  const navigation =useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle:'Add New Business'
   })

  //  onCategorySave()
  }, [])

  const onImageSave =async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    setSaveImage(result?.assets[0].uri)
    console.log(result);


  }

  const onCategorySave =async () =>{
    setCategoryList([])
    const q=query(collection(db,'Category'))
    const snapShot = await getDocs(q)
    snapShot.forEach((doc)=>{
      setCategoryList(prev=>[...prev,{
        label:(doc.data()).name,
        value:(doc.data()).name
      }])
    })
  }

  const onAddNewBusiness= async() =>{
    setloading(true)
    const fileName = Date.now().toString()+".jpg";
    const response = await fetch(onImageSave)
    const blob= await response.blob()

    const imageRef=ref(storage,'business/app/'+fileName)
    uploadBytes(imageRef,blob).then((snapShot)=>{
      console.log("File Uploaded")
    }).then(res=>{
      getDownloadURL(imageRef).then(async(downloadUrl)=>{
        savBusinessDetail(downloadUrl)
      })
    })
    setloading(false)
  }

  const savBusinessDetail=async(imageURL)=>{
    await getDoc(doc(db,"BusinessDetail",Date.now().toString()),{
      name:Name,
      address:Address,
      website:Website,
      catgeory:categoryList,
      about:about,
      username:user?.fullName,
      emailEmail:user?.primaryEmailAddress?.emailAddress,
      userImage:user?.imageUrl,
      imageUrl:imageURL
    })
    setloading(false)
    ToastAndroid.show('New Business Added',ToastAndroid.LONG)
  }

  const setFeildsEmpty = () =>{
    setName(null)
    setabout(null)
    setCategoryList(null)
    setWebsite(null)
    setcontact(null)
    setAddress(null)
    router.push('/ProfileTabs/mybusniess')
  }
  
  return (
    <ScrollView style={{padding:20,}}>
      <Text style={{fontFamily:"outfit-R",fontSize:25}}>Add-business</Text>
      <Text style={{fontFamily:"outfit-R",color:Colors.GRAY}}>Fill all Detail in order to add new bussiness </Text>
      <TouchableOpacity style={{marginTop:20}} onPress={()=>onImageSave()}>
      {!SaveImage?<Image source={{uri:"https://cdn-icons-png.flaticon.com/128/2659/2659360.png"}} width={100} height={100}/>:
      <Image source={{uri:SaveImage}} width={100} height={100} style={{borderRadius:15}}/>
      
      }
      </TouchableOpacity>

      <View>
        <TextInput placeholder='Name' value={Name} onChangeText={(v)=>setName(v)} style={{padding:10,borderWidth:1,borderRadius:5,marginTop:10,fontFamily:"outfit-R",fontSize:15,backgroundColor:"#fff",borderColor:Colors.PRIMARY}} />
        <TextInput placeholder='Address' value={Address} onChangeText={(v)=>setAddress(v)} style={{padding:10,borderWidth:1,borderRadius:5,marginTop:10,fontFamily:"outfit-R",fontSize:15,backgroundColor:"#fff",borderColor:Colors.PRIMARY}} />
        <TextInput placeholder='Contact' value={contact} onChangeText={(v)=>setcontact(v)} style={{padding:10,borderWidth:1,borderRadius:5,marginTop:10,fontFamily:"outfit-R",fontSize:15,backgroundColor:"#fff",borderColor:Colors.PRIMARY}} />
        <TextInput height={100} multiline numberOfLines={5} value={about} onChangeText={(v)=>setabout(v)} placeholder='About' style={{padding:10,borderWidth:1,borderRadius:5,marginTop:10,fontFamily:"outfit-R",fontSize:15,backgroundColor:"#fff",borderColor:Colors.PRIMARY}} />
        <TextInput placeholder='Website' value={Website} onChangeText={(v)=>setWebsite(v)} style={{padding:10,borderWidth:1,borderRadius:5,marginTop:10,fontFamily:"outfit-R",fontSize:15,backgroundColor:"#fff",borderColor:Colors.PRIMARY}} />
        <View style={{borderWidth:1,borderRadius:5,marginTop:10,fontFamily:"outfit-R",
          fontSize:15,backgroundColor:"#fff",borderColor:Colors.PRIMARY}}>
      <RNPickerSelect  
      value={categoryList}
      onValueChange={(value) => setCategoryList(value)}
      items={[
        { label: 'Shoping', value: 'Shopping' },
        { label: 'Kids', value: 'Kids' },
        { label: 'Women', value: 'Women' },
        { label: 'Partying', value: 'Partying' },
        { label: 'Outing', value: 'Outing' },
        { label: 'Sports', value: 'Sports' },
      ]}
    />
        </View>

        <TouchableOpacity onPress={setFeildsEmpty} style={{marginBottom:40,padding:15,borderRadius:5,marginTop:20,backgroundColor:Colors.PRIMARY,}}>
          
          {loading?<ActivityIndicator size={large} color={"#fff"}/>:<Text style={{textAlign:'center',fontFamily:'outfit-M',color:"#fff"}}>Add New Business</Text>}
        
          </TouchableOpacity>
      
      </View>
    
    </ScrollView>
  )
}

export default Addbusiness

const styles = StyleSheet.create({})




{/* <RNPickerSelect
onValueChange={(value) => console.log(value)}
items={categoryList}
/> */}