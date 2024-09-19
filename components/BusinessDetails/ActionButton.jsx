import { StyleSheet, Text, View ,Image, TouchableOpacity, Linking, SafeAreaView, Share} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'

const ActionButton = ({Detail}) => {

    const deatilItem =Array.isArray(Detail)?Detail[0] :Detail
    console.log(deatilItem)
    if(!deatilItem || !deatilItem.imgUrl){
        return <Text>Error: Detail or imgUrl is not defined</Text>;
    }
    const ActionButtonMenu=[{
        id:1,
        name:"Call",
        icon:"https://cdn-icons-png.flaticon.com/128/5585/5585856.png",
        url:'tel:'+deatilItem?.contact
    },{
        id:2,
        name:"Website",
        icon:"https://cdn-icons-png.flaticon.com/128/16886/16886221.png",
        url:deatilItem?.website
    },{
        id:3,
        name:"Location",
        icon:"https://cdn-icons-png.flaticon.com/128/684/684908.png",
        url:"https://www.google.com/maps/search/?api=1&query="+deatilItem?.address
    },{
        id:4,
        name:"Share",
        icon:"https://cdn-icons-png.flaticon.com/128/107/107784.png",
        url:""
    }]

    //If you are dynamically iterate in flatlist and render images you can use the require like {icon:require(../Assessts/Images.call.png)}
  const OpenOnPresshandler=(item)=>{
    if(item.name==='Share'){
        Share.share({
          message:deatilItem?.name + '\n Address:'+deatilItem?.address + '\n Find more detail on Bussiness Website'
        })
        return;
    }
    Linking.openURL(item.url)
  }
  
    return (
    <View style={{backgroundColor:"#fff",padding:20}}>
      
      <FlatList 
      data={ActionButtonMenu}
      scrollEnabled={false}
      numColumns={4}
      columnWrapperStyle ={{justifyContent:'space-between'}}
      renderItem={({item,index})=>(
        <TouchableOpacity onPress={()=>OpenOnPresshandler(item)} key={index}>
        <View>
        <Image source={{uri:item.icon}} style={{width:40,height:40}} /> 
        <Text style={{fontFamily:"outfit-M",textAlign:'center',marginTop:3}}>{item.name}</Text>
        </View>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

export default ActionButton

const styles = StyleSheet.create({})